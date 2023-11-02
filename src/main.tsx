import ReactDOM from 'react-dom/client';
import './index.scss';
import { RouterProvider } from 'react-router-dom';
import router from './pages/Router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
