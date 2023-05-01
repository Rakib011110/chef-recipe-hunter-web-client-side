import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayouts from "./Components/MainLayouts/MainLayouts.jsx";
import Home from "./Components/Home/Home.jsx";
import Chefs from "./Components/Home/ChefSection/Chefs.jsx";
import Login from "./Components/Share/Login.jsx";
import Register from "./Components/Share/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/chefs",
        element: <Chefs />,
        loader: () => fetch(""),
      },

      {
        path: "chefs/:id",
        element: <></>,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
