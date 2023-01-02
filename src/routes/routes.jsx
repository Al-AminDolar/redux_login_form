import { useSelector } from "react-redux";
import Protected from "../pages/Login/Index";
import Main from "../pages/Mian/Main";
import AddToCart from "../pages/product/AddToCart";

import ProductCart from "../pages/product/ProductCart";

const { createBrowserRouter } = require("react-router-dom");

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Protected />,
      },
      {
        path: "/cartlist",
        element: <AddToCart />,
      },
    ],
  },
]);

export default routes;
