import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAlbum } from '../models/album.model';
import { env } from '../../config/env';

const clientId = process.env.UNSPLASH_ACCESS_KEY;

export const albumApi = createApi({
    reducerPath: 'albumApi',
    baseQuery: fetchBaseQuery({ baseUrl: env.VITE_UNSPLASH_URL }),
    endpoints: (builder) => ({
      getAllAlbums: builder.query<IAlbum[], void>({
        query: () => `/collections/?&client_id=${clientId}&per_page=10`,
      }),
    }),
  });
  
  export const {
    useGetAllAlbumsQuery,
  } = albumApi;
  