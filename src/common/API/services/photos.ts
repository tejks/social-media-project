import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUnsplashPhoto } from '../models/photo.model';
import { env } from '../../config/env';

const clientId = process.env.UNSPLASH_ACCESS_KEY;

export const photoApi = createApi({
  reducerPath: 'photoApi',
  baseQuery: fetchBaseQuery({ baseUrl: env.VITE_UNSPLASH_URL }),
  endpoints: (builder) => ({
    getRandomPhotos: builder.query<IUnsplashPhoto[], number | void>({
      query: () => `/photos/random?&client_id=${clientId}&count=30`,
      keepUnusedDataFor: 0,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const { useGetRandomPhotosQuery } = photoApi;
