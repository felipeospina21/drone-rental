/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser(state, action) {
      const { payload } = action;
      state.userData = payload;
    },
    logoutUser() {
      return initialState;
    },
  },
});

const { actions, reducer } = userSlice;

export const { loginUser, logoutUser } = actions;

export default reducer;