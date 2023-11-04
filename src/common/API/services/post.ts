import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from '../models/post.model';
import { env } from '../../config/env';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: env.VITE_JSONPLACEHOLDER_URL }),
  endpoints: (builder) => ({
    getPost: builder.query<IPost, number>({
      query: (id) => `posts/${id}`,
    }),
    getAllPosts: builder.query<IPost[], void>({
      query: () => `posts`,
    }),
    addPost: builder.mutation<IPost, Partial<IPost>>({
      query: (body) => ({
        url: `posts`,
        method: 'POST',
        body,
      }),
    }),
    deletePost: builder.mutation<IPost, number>({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
    }),
    updatePost: builder.mutation<IPost, Partial<IPost>>({
      query: ({ id, ...patch }) => ({
        url: `posts/${id}`,
        method: 'PATCH',
        body: patch,
      }),
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetPostQuery,
  useAddPostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
} = postApi;
