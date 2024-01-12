import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "@/pages/SignIn.tsx";
import Homepage from "@/pages/Homepage.tsx";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <SignIn operation={"signin"} />,
  },
  {
    path: "/signup",
    element: <SignIn operation={"signup"} />,
  },
  {
    path: "/home",
    element: <Homepage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
