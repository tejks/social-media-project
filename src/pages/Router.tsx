import { Outlet, createBrowserRouter } from 'react-router-dom';

import ErrorPage from '@components/ErrorPage';
import Navbar from '@components/Layout/Navbar/Navbar';

import Post from '@pages/Posts/Post';
import Posts from '@pages/Posts/Posts';

import Footer from '@/components/Layout/Footer';
import RouteWrapper from '@/components/Layout/RouteWrapper';
import Photos from '@pages/Photos/Photos';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

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
        path: '/signup',
        element: (
          <>
            <Navbar />
            <Signup />
          </>
        ),
      },
      {
        path: '/posts',
        element: (
          <RouteWrapper>
            <Navbar />
            <Posts />
            <Footer />
          </RouteWrapper>
        ),
      },
      {
        path: '/posts/:id',
        element: (
          <RouteWrapper>
            <Navbar />
            <Post />
            <Footer />
          </RouteWrapper>
        ),
      },
      {
        path: '/photos',
        element: (
          <RouteWrapper>
            <Navbar />
            <Photos />,
            <Footer />
          </RouteWrapper>
        ),
      },
    ],
  },
]);

export default router;
