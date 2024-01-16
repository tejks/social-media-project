import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';
import { AuthUser } from '../API/models/user.model';
import { authApi } from '../API/services/auth';

// const initialState = async (): Promise<{ user: AuthUser | null }> => {
//   try {
//     const user = await axios.get(env.VITE_CUSTOM_API_URL + 'users/current', { withCredentials: true });
//     return { user: user.data as AuthUser };
//   } catch (error) {
//     return { user: null };
//   }
// };

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null } as { user: AuthUser | null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.signin.matchFulfilled, (state, { payload }) => {
      state.user = payload;
    });
    builder.addMatcher(authApi.endpoints.signout.matchFulfilled, (state) => {
      state.user = null;
    });
    builder.addMatcher(authApi.endpoints.current.matchRejected, (state) => {
      state.user = null;
    });
    builder.addMatcher(authApi.endpoints.current.matchFulfilled, (state, { payload }) => {
      state.user = payload;
    });
  },
});

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
