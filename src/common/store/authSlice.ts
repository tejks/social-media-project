import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '.';
import { AuthUser } from '../API/models/user.model';
import { authApi } from '../API/services/auth';

const initialState = async (): Promise<{ user: AuthUser | null }> => {
  try {
    const user = await axios.get('http://localhost:3000/users/current', { withCredentials: true });
    return { user: user.data as AuthUser };
  } catch (error) {
    return { user: null };
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState: await initialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.signin.matchFulfilled, (state, { payload }) => {
      state.user = payload;
    });
    builder.addMatcher(authApi.endpoints.signout.matchFulfilled, (state) => {
      state.user = null;
    });
  },
});

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
