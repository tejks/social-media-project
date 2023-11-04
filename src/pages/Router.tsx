import { createBrowserRouter, Outlet } from 'react-router-dom';

import Home from './Home';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
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
    ],
  },
]);

export default router;
