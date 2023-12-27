/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000', credentials: 'include' }),
  endpoints: (builder) => ({
    signin: builder.mutation<any, { email: string; password: string }>({
      query: ({ email, password }) => ({
        url: 'auth/signin',
        method: 'POST',
        body: {
          username: email,
          password,
        },
      }),
      transformResponse: (response: any[]) => {
        console.log(response);
        return response;
      },
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
      transformResponse: (response: any[]) => {
        console.log(response);
        return response;
      },
    }),
    signout: builder.mutation<any, void>({
      query: () => ({
        url: 'auth/signout',
        method: 'POST',
      }),
      transformResponse: (response: any) => {
        console.log(response);
        return response;
      },
    }),
    current: builder.query<any, void>({
      query: () => ({
        url: 'auth/current',
        method: 'GET',
      }),
      transformResponse: (response: any) => {
        console.log(response);
        return response;
      },
    }),
  }),
});

export const { useSigninMutation, useSignupMutation, useSignoutMutation, useCurrentQuery } = authApi;
