import { TLocationState } from "./reducers/location";
import { RootState } from "./store";

export const selectPos = (state: RootState): TLocationState["pos"] =>
  state.location.pos;
