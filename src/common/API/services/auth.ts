import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { env } from '../../config/env';
import { IUser } from '../models/user.model';

export const authApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: env.VITE_JSONPLACEHOLDER_URL }),
  endpoints: (builder) => ({
    login: builder.mutation<IUser | null, string>({
      query: () => ({
        url: 'users',
        method: 'GET',
      }),
      transformResponse: (response: IUser[], _, arg) => {
        const user = response.find((user) => user.email === arg);
        return user ? user : null;
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
