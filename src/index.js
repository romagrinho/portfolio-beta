import React from 'react';
import ReactDOM from 'react-dom/client';
import { useHistory } from 'react-router-dom';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Homexp from './Pages/Homexp/homexp';
import Blue_screen from './Pages/Blue_screen/bluescreen';
import Loading from './Pages/Loading/loading';
import Portfolio from './Pages/Portfolio/portfólio';

const router = createBrowserRouter([
  {
      path: "/",
      element:<Homexp/>
  },

  {
      path: "Error",
      element:<Blue_screen/>
  },

  {
      path: "Loading",
      element:<Loading/>
  },
  
  {
      path: "Portfólio",
      element:<Portfolio/>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

