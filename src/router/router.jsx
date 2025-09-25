import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../components/pages/home/Home";
import Login from "../components/login/Login";
import Register from "../components/login/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>404 Not Found</div>,
    children: [
      { index: true, Component: Home },
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
    ],
  },
]);
