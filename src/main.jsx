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
import { Provider } from 'react-redux';
import { persistor, store } from './GlobalState/Store';
import { PersistGate } from 'redux-persist/integration/react';
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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router}/>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
