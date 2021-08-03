import { Middleware } from "@reduxjs/toolkit";
import { isType } from "typescript-fsa";

import { resolveLocation, setPos } from "../actions";
import { RootState } from "../store";

export const ipMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    const { dispatch } = store;
    const state = store.getState();
    if (!state.location.pos && isType(action, resolveLocation)) {
      fetch(
        "https://ipgeolocation.abstractapi.com/v1/?api_key=64aa99cb731c426cb0467daf0e0d2a66"
      ).then((res) => {
        if (res.status === 200) {
          res.json().then((data) => {
            const { longitude, latitude } = data;
            dispatch(setPos([longitude, latitude]));
          });
        }
      });
    }
    return next(action);
  };
