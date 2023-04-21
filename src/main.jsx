import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  Home,
  Signup,
  Login,
  App
} from './Pages/Routes';

import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: "/app",
    element: <App/>
  },
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/signup',
    element: <Signup/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
