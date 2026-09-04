import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import "flowbite";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router';
import {Provider} from "react-redux"
import {store} from "./store/store.js"
import {LoginPage,SignupPage} from "./pages"

const router=createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>

      {/* <Route path='/' element={<App/>}> */}
      {/* <Route path='' element={kjk}/>
      <Route path='' element={kjk}/>
      <Route path='' element={kjk}/>
      <Route path='' element={kjk}/>
      <Route path='' element={kjk}/> */}
    {/* </Route> */}
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
