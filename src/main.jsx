import "flowbite";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router';
import {Provider} from "react-redux"
import {store} from "./store/store.js"
import {LoginPage,SignupPage,DashboardPage,MyTasksPage,CreateProjectFormPage,ProjectOverview,CreateTaskFormPage} from "./pages"
import {Authentication} from "./Component"

const router=createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/signup' element={<Authentication authentication={false}><SignupPage/></Authentication>}/>
      <Route path='/login' element={<Authentication authentication={false}><LoginPage/></Authentication>}/>

      <Route path='/' element={<App/>}>
      <Route path='/' element={<Authentication authentication><DashboardPage/></Authentication>}/>
      <Route path='/my-tasks' element={<Authentication authentication><MyTasksPage/></Authentication>}/>
      <Route path='/create-project' element={<Authentication authentication><CreateProjectFormPage/></Authentication>}/>
      <Route path='/:slug' element={<Authentication authentication><ProjectOverview/></Authentication>}/>
      <Route path='/:slug/create-post' element={<Authentication authentication><CreateTaskFormPage/></Authentication>}/>
    </Route>
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
