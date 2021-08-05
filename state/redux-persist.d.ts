declare module "redux-persist/es/persistStore" {
  import { Store } from "redux";
  import { Action, Reducer } from "redux";
  import { Persistor, PersistorOptions } from "redux-persist/es/types";
  import { PersistConfig, PersistState } from "redux-persist/es/types";
  import { WebStorage } from "redux-persist/es/types";

  /**
   * @desc Creates a persistor for a given store.
   * @param store store to be persisted (or match an existent storage)
   * @param persistorOptions enhancers of the persistor
   * @param callback bootstrap callback of sort.
   */
  // tslint:disable-next-line: strict-export-declare-modifiers
  export default function persistStore(
    store: Store,
    persistorOptions?: PersistorOptions | null,
    callback?: () => any
  ): Persistor;
}

declare module "redux-persist/lib/persistStore" {
  export * from "redux-persist/es/persistStore";
  export { default } from "redux-persist/es/persistStore";
}

declare module "redux-persist/es/persistReducer" {
  interface PersistPartial {
    _persist: PersistState;
  }

  /**
   * @desc It provides a way of combining the reducers, replacing redux's @see combineReducers
   * @param config persistence configuration
   * @param baseReducer reducer used to persist the state
   */
  // tslint:disable-next-line: strict-export-declare-modifiers
  export default function persistReducer<S, A extends Action = Action>(
    config: PersistConfig<S>,
    baseReducer: Reducer<S, A>
  ): Reducer<S & PersistPartial, A>;
}

declare module "redux-persist/lib/persistReducer" {
  export * from "redux-persist/es/persistReducer";
  export { default } from "redux-persist/es/persistReducer";
}

declare module "redux-persist/es/storage" {
  const localStorage: WebStorage;
  export default localStorage;
}

declare module "redux-persist/lib/storage" {
  export * from "redux-persist/es/storage";
  export { default } from "redux-persist/es/storage";
}
