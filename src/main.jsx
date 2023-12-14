import React from 'react'
import ReactDOM from 'react-dom/client'

import './globals.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='flex h-screen'>
   <RouterProvider router={router} />
   </div>
  </React.StrictMode>,
)
