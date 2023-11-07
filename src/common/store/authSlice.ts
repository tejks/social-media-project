import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../API/models/user.model';
import { RootState } from '.';
import { authApi } from '../API/services/auth';

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null } as {
    user: IUser | null;
    token: null | string;
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      state.user = payload;
    });
  },
});

export default authSlice.reducer;

export const { logout } = authSlice.actions;

export const selectCurrentUser = (state: RootState) => state.auth.user;
