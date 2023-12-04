import { createBrowserRouter, Outlet } from 'react-router-dom';

import ErrorPage from '@components/ErrorPage';
import Navbar from '@components/Layout/Navbar/Navbar';
import Albums from './Albums';
import Home from './Home';
import Login from './Login';
import Post from './Posts/Post';
import Posts from './Posts/Posts';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/posts',
        element: <Posts />,
      },
      {
        path: '/posts/:id',
        element: <Post />,
      },
      {
        path: '/albums',
        element: <Albums />,
      },
    ],
  },
]);

export default router;
