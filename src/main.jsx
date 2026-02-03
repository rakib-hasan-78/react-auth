import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Pages/Root/Root';
import App from './Pages/App/App';
import Login from './Pages/Login/Login';



const router = createBrowserRouter([
  {
    path: '/',
    Component:Root,
    children: [
      {
        index:true,
        Component:App,

      },
      {
        path:'/login',
        Component: Login
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)