import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { HomeApp } from "./HomeApp";
import { DisplayEvents } from "./Pages/DisplayEvents";
import { GlobalApp } from "./GlobalApp";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <GlobalApp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

/**
 * const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeApp />,
    children: [
      {
        path: "contact",
        element: <FormApp />,
      },
      {
        path: "test",
        element: <Test />,
      },
    ],
  },
]);
 * 
 * {
    path: "test",
    element: <Test />,
  },
 */

////

/*
  const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/*" element={<HomeApp />} />)
);
  */
