import React from 'react'
import ReactDOM from 'react-dom/client'
import {
   createBrowserRouter, 
   createRoutesFromElements, 
   Route, 
   RouterProvider, 
  } from 'react-router-dom'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import HomeScreen from './Screens/HomeScreen.jsx'
import LoginScreen from './Screens/Loginscreen.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
        <Route index={ true } path='/' element={<HomeScreen />} />
        <Route path='/login' element={<LoginScreen /> } />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
