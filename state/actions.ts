import actionCreatorFactory from "typescript-fsa";

type TPos = [lng: number, lat: number];

const actionTypes = {
  RESOLVE_LOCATION: "RESOLVE_LOCATION",
  SET_POS: "SET_POS",
};

const actionCreator = actionCreatorFactory();

export const resolveLocation = actionCreator(actionTypes.RESOLVE_LOCATION);
export const setPos = actionCreator<TPos>(actionTypes.SET_POS);
