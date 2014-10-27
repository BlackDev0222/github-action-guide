import { AnyAction, Reducer, combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducers, actions, initialState } from './slices';

const combinedReducer = combineReducers(reducers);

export type RootState = ReturnType<typeof combinedReducer>;

const initialRootState: RootState = initialState;

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === "users/logout") {
    state = initialRootState;
  }
  return combinedReducer(state, action);
}

const store = configureStore({
  reducer: rootReducer
});

export default store;

export {
  actions
}