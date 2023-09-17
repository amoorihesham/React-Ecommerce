import React, { useContext, useEffect } from "react";
import style from "./Layout.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <>
      <Navbar />

      <Outlet></Outlet>
      <ToastContainer />

      <Footer />
    </>
  );
};

export default Layout;
