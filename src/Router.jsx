import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import About from './page/About';
import Contact from './page/Text';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]);
