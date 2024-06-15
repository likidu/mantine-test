import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Demo } from './pages/Demo.page';
import { HomePage } from './pages/Home.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/demo',
    element: <Demo />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
