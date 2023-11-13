import { createBrowserRouter, Outlet } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import Posts from './Posts/Posts';
import Albums from './Albums';
// import Footer from '../components/Layout/Footer';
import Navbar from '../components/Layout/Navbar/Navbar';
import ErrorPage from '../components/ErrorPage';
import Post from './Posts/Post';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Outlet />
        {/* <Footer /> */}
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
