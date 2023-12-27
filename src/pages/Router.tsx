import { Outlet, createBrowserRouter } from 'react-router-dom';

import ErrorPage from '@components/ErrorPage';
import Navbar from '@components/Layout/Navbar/Navbar';

import Post from '@pages/Posts/Post';
import Posts from '@pages/Posts/Posts';

import Photos from '@pages/Photos/Photos';
import Albums from './Albums';
import Home from './Home';
import Login from './Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: (
          <>
            <Navbar />
            <Login />
          </>
        ),
      },
      {
        path: '/posts',
        element: (
          <>
            <Navbar />
            <Posts />
          </>
        ),
      },
      {
        path: '/posts/:id',
        element: (
          <>
            <Navbar />
            <Post />
          </>
        ),
      },
      {
        path: '/albums',
        element: (
          <>
            <Navbar />
            <Albums />
          </>
        ),
      },
      {
        path: '/photos',
        element: (
          <>
            <Navbar />
            <Photos />,
          </>
        ),
      },
    ],
  },
]);

export default router;
