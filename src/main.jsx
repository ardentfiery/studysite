import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Mainpage from './pages/Mainpage.jsx'
import Motivation from './pages/Motivation.jsx'
import Todo from './pages/Todo.jsx'
import Calendar from './pages/Calendars.jsx'
import Personalgrowth from './pages/Personalgrowth.jsx'
import Studynow from './pages/Studynow.jsx'
import Pdfviewer from './pages/component/Pdfviewer.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<Mainpage/>
  },
  {
    path:"/motivation",
    element:<Motivation/>
  },
  {
    path:"/todo",
    element:<Todo/>
  },
  {
    path:"/personalgrowth",
    element:<Personalgrowth/>
  },
  {
    path:"/calendar",
    element:<Calendar/>
  },
  {
    path:"/studynow",
    element:<Studynow/>
  },
  {
    path:"/pdfview/:pdffilename",
    element:<Pdfviewer/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
