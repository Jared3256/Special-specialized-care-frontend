import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from "./components/components/Router.jsx"
import AuthProvider from './services/context/AuthProvider/index.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AuthProvider> */}
       <RouterProvider router={Router}/>
    {/* </AuthProvider> */}
  </React.StrictMode>,
)
