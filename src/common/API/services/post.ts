import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IComment } from '../models/comment.model';
import { IPost } from '../models/post.model';

import { env } from '@/common/config/env';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: env.VITE_CUSTOM_API_URL, credentials: 'include' }),
  endpoints: (builder) => ({
    getPost: builder.query<IPost, string>({
      query: (id) => `posts/${id}`,
    }),
    getAllPosts: builder.query<IPost[], number | undefined>({
      query: (page) => ({
        url: `posts`,
        method: 'GET',
        params: {
          page,
        },
      }),
    }),
    getCommentsByPostId: builder.query<IComment[], string>({
      query: (id) => `posts/${id}/comments`,
    }),
    createPost: builder.mutation<IPost, Partial<IPost>>({
      query: (body) => ({
        url: `posts`,
        method: 'POST',
        body,
      }),
    }),
    deletePost: builder.mutation<IPost, string>({
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
    likePost: builder.mutation<IPost, string>({
      query: (id) => ({
        url: `likes/post`,
        method: 'POST',
        body: { postId: id },
      }),
    }),
    unlikePost: builder.mutation<IPost, string>({
      query: (id) => ({
        url: `likes/post/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetPostQuery,
  useGetCommentsByPostIdQuery,
  useCreatePostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
  useLikePostMutation,
  useUnlikePostMutation,
} = postApi;
