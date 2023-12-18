import { createBrowserRouter, Outlet } from 'react-router-dom';

import ErrorPage from '@components/ErrorPage';
import Footer from '@components/Layout/Footer';
import Navbar from '@components/Layout/Navbar/Navbar';

import Post from '@pages/Posts/Post';
import Posts from '@pages/Posts/Posts';

import Albums from './Albums';
import Home from './Home';
import Login from './Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Outlet />
        <Footer />
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
