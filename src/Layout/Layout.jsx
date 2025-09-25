import React from "react";
import { Outlet } from "react-router";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
