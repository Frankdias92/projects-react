
import './global.css'
import { Sidebar } from "./components/Sidebar";

import { router } from './routers'
import { RouterProvider } from 'react-router-dom'

export function App() {
  return (
    <>
      <div className="layout">
        <Sidebar />

        <div className="content">
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  )
}