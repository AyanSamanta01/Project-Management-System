import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "flowbite";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import {Provider} from "react-redux"
import  store from "./store/store.js"

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={kjk}/>
      <Route path='' element={kjk}/>
      <Route path='' element={kjk}/>
      <Route path='' element={kjk}/>
      <Route path='' element={kjk}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
