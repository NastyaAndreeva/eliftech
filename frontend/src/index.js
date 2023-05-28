import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import "./reset.css";
import "./modern-normalize.css";
import NotFound from "./pages/NotFound";
import Shops from "./pages/Shops";
import Cart from "./pages/Cart";
// import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        element: <Shops />,
        index: true,
      },
      {
        path: "/cart",
        element: <Cart />,
        index: true,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
