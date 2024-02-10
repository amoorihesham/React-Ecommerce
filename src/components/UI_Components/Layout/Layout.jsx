import { Offline } from "react-detect-offline";
import { Navbar, Footer } from "../..";
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
