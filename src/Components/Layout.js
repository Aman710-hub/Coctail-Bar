import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      {/* <div style={{ minHeight: "100vh" }}> */}
      <Outlet />
      {/* </div> */}
      <Footer />
    </>
  );
};

export default Layout;
