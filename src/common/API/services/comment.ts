import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IComment } from '../models/comment.model';

export const commentApi = createApi({
  reducerPath: 'commentApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000', credentials: 'include' }),
  endpoints: (builder) => ({
    getComment: builder.query<IComment, string>({
      query: (id) => `comments/${id}`,
    }),
    getAllComments: builder.query<IComment[], void>({
      query: () => `comments`,
    }),
    createComment: builder.mutation<IComment, Partial<IComment>>({
      query: (body) => ({
        url: `comments`,
        method: 'POST',
        body,
      }),
    }),
    deleteComment: builder.mutation<IComment, string>({
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
  useCreateCommentMutation,
  useDeleteCommentMutation,
  useUpdateCommentMutation,
} = commentApi;
