import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IComment } from '../models/comment.model';
import { IPost } from '../models/post.model';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000', credentials: 'include' }),
  endpoints: (builder) => ({
    getPost: builder.query<IPost, string>({
      query: (id) => `posts/${id}`,
    }),
    getAllPosts: builder.query<IPost[], void>({
      query: () => `posts`,
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
      transformResponse: (response: IPost) => {
        console.log(response);
        return response;
      },
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
  useGetCommentsByPostIdQuery,
  useCreatePostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
} = postApi;
