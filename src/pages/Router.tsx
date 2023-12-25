import { createBrowserRouter, Outlet } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import Posts from './Posts';
import Albums from './Albums';
import Photos from './Photos/Photos';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar/Navbar';
import ErrorPage from '../components/ErrorPage';

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
        path: '/albums',
        element: <Albums />,
      },
      {
        path: '/photos',
        element: <Photos />,
      },
    ],
  },
]);

export default router;
