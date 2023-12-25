import { ConfigureStoreOptions, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { authApi } from '../API/services/auth';
import { postApi } from '../API/services/post';
import { commentApi } from '../API/services/comment';
import { photoApi } from '../API/services/photos';

import auth from './authSlice';

export const createStore = (options?: ConfigureStoreOptions['preloadedState'] | undefined) =>
  configureStore({
    reducer: {
      [postApi.reducerPath]: postApi.reducer,
      [commentApi.reducerPath]: commentApi.reducer,
      [authApi.reducerPath]: authApi.reducer,
      [photoApi.reducerPath]: photoApi.reducer,
      auth,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(postApi.middleware, commentApi.middleware, authApi.middleware, photoApi.middleware),
    ...options,
  });

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
