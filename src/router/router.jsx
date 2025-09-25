import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../components/pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>404 Not Found</div>,
    children: [
        { index: true, Component: Home },
        
    ],
  },
]);
