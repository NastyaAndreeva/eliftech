import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import "./reset.css";
import "./modern-normalize.css";
import NotFound from "./pages/NotFound";
import Shops from "./pages/Shops";
import Cart from "./pages/Cart";
import { ProductsContext } from "./productsContext";
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
    <ProductsContext.Provider value={[]}>
      <RouterProvider router={router} />
    </ProductsContext.Provider>
  </React.StrictMode>
);
