import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.ts'
import { App } from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home/index.tsx'
import { Checkout } from './pages/Checkout/index.tsx'
import { Success } from './pages/Succes/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      }, {
        path: '/checkout',
        element: <Checkout />,
      }, {
        path: '/order/:orderId/success',
        element: <Success />,
      },
    ],
  },
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
