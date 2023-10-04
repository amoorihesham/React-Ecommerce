import React from "react";
import { Offline, Online } from "react-detect-offline";
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
      <Offline>
        <div className="offline">No Internet Connection</div>
      </Offline>

      <Footer />
    </>
  );
};

export default Layout;
