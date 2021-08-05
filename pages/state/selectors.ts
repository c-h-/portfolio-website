import { TLocationState } from "./reducers/location";
import { RootState } from "./store";

export const selectPos = (state: RootState): TLocationState["pos"] =>
  // @ts-ignore
  state.location.pos;
