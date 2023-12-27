import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUnsplashPhoto } from '../models/photo.model';
import { env } from '../../config/env';

const clientId = process.env.UNSPLASH_ACCESS_KEY;

export const photoApi = createApi({
    reducerPath: 'photoApi',
    baseQuery: fetchBaseQuery({ baseUrl: env.VITE_UNSPLASH_URL }),
    endpoints: (builder) => ({
        getRandomPhotos: builder.query<IUnsplashPhoto[], void>({
            query: () => `/photos/random/?&client_id=${clientId}&count=30`
        })
        
  }),
});

export const {
    useGetRandomPhotosQuery,
  } = photoApi;
