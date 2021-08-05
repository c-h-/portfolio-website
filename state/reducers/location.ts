import { Action } from "@reduxjs/toolkit";
import { isType } from "typescript-fsa";

import { setPos } from "../actions";

export type TLocationState = {
  pos: [lon: number, lat: number] | null;
};

const initialState = {
  pos: null,
};

export default function reducer(
  state = initialState,
  action: Action
): TLocationState {
  if (isType(action, setPos)) {
    return { ...state, pos: action.payload };
  } else {
    return state;
  }
}
