import React from 'react'
import ReactDOM from 'react-dom/client'
import {
   createBrowserRouter, 
   createRoutesFromElements, 
   Route, 
   RouterProvider, 
  } from 'react-router-dom'
import store from './store.js'
import { Provider } from 'react-redux'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import PrivateRoute from './components/PrivateRoute.jsx'
import HomeScreen from './Screens/HomeScreen.jsx'
import LoginScreen from './Screens/Loginscreen.jsx'
import RegisterScreen from './Screens/RegisterScreen.jsx'
import Profile from './Screens/Profile.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    
      <Route path='/' element={<App />}>
          <Route index={ true } path='/' element={<HomeScreen />} />
          <Route path='/login' element={<LoginScreen /> } />
          <Route path='/register' element={<RegisterScreen /> } />
          {/* Private routes */}
          <Route path='' element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
          </Route>

      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={ router } />
    </React.StrictMode>,
  </Provider>

)
