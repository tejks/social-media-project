/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthUser, IUser } from '../models/user.model';

export const authApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000', credentials: 'include' }),
  endpoints: (builder) => ({
    signin: builder.mutation<AuthUser, { email: string; password: string }>({
      query: ({ email, password }) => ({
        url: 'auth/signin',
        method: 'POST',
        body: {
          username: email,
          password,
        },
      })
    }),
    signup: builder.mutation<any, { email: string; password: string; firstName: string; lastName: string }>({
      query: ({ email, password, firstName, lastName }) => ({
        url: 'auth/signup',
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
          firstName,
          lastName,
        }),
      }),
    }),
    signout: builder.mutation<any, void>({
      query: () => ({
        url: 'auth/signout',
        method: 'POST',
      }),
    }),
    current: builder.query<any, void>({
      query: () => ({
        url: 'users/current',
        method: 'GET',
      }),
    }),
    getAllUsers: builder.query<IUser[], void>({
      query: () => ({
        url: 'users',
        method: 'GET',
      }),
    }),
    getUserById: builder.query<IUser, string>({
      query: (id) => ({
        url: `users/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useSigninMutation, useSignupMutation, useSignoutMutation, useCurrentQuery, useGetAllUsersQuery, useGetUserByIdQuery } = authApi;
