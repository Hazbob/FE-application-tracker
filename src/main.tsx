import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import SignIn from "@/pages/SignIn.tsx";

const router = createBrowserRouter([{
    path: "/signin",
    element: <SignIn operation={"signin"}/>
},{
    path: "/signup",
    element: <SignIn operation={"signup"}/>
}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
