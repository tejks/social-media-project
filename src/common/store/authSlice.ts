import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';
import { AuthUser } from '../API/models/user.model';
import { authApi } from '../API/services/auth';

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null } as {
    user: AuthUser | null;
    token: null | string;
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.signin.matchFulfilled, (state, { payload }) => {
      state.user = payload;
    });
    builder.addMatcher(authApi.endpoints.signout.matchFulfilled, (state) => {
      state.user = null;
      state.token = null;
    });
  },
});

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
