import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '../../models';

export type MeState = {
  me?: User,
  loading: boolean
}

export const meInitialState: MeState = {
  loading: false
};

export const meSlice = createSlice({
  name: "me",
  initialState: meInitialState,
  reducers: {
    meRequest(state: MeState) {
      state.loading = true;
    },
    setMe(state: MeState, action: PayloadAction<User>) {
      state.loading = false;

      state.me = action.payload;
    },
    logout(state: MeState) {
      state.me = undefined;
    }
  }
});

export const meActions = meSlice.actions;
