import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IComment } from '../models/comment.model';
import { env } from '../../config/env';

export const commentApi = createApi({
  reducerPath: 'commentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: env.VITE_JSONPLACEHOLDER_URL,
  }),
  endpoints: (builder) => ({
    getComment: builder.query<IComment, number>({
      query: (id) => `comments/${id}`,
    }),
    getAllComments: builder.query<IComment[], void>({
      query: () => `comments`,
    }),
    getCommentsForPost: builder.query<IComment[], number>({
      query: (id) => `comments?postId=${id}`,
    }),
    addComment: builder.mutation<IComment, Partial<IComment>>({
      query: (body) => ({
        url: `comments`,
        method: 'POST',
        body,
      }),
    }),
    deleteComment: builder.mutation<IComment, number>({
      query: (id) => ({
        url: `comments/${id}`,
        method: 'DELETE',
      }),
    }),
    updateComment: builder.mutation<IComment, Partial<IComment>>({
      query: ({ id, ...patch }) => ({
        url: `comments/${id}`,
        method: 'PATCH',
        body: patch,
      }),
    }),
  }),
});

export const {
  useGetAllCommentsQuery,
  useGetCommentQuery,
  useGetCommentsForPostQuery,
  useAddCommentMutation,
  useDeleteCommentMutation,
  useUpdateCommentMutation,
} = commentApi;
