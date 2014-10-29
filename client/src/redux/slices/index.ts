import { meSlice, meActions, meInitialState } from './me.slice'

export const slices = {
  me: meSlice
};

export const reducers = {
  me: meSlice.reducer
}

export const actions = {
  me: meActions
};

export const initialState = {
  me: meInitialState
};
