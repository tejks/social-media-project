import { createBrowserRouter, Outlet } from 'react-router-dom';

import Home from './Home';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

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
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

export default router;
