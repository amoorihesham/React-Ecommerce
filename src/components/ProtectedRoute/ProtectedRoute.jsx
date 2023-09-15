import React, { useContext } from "react";
import style from "./ProtectedRoute.module.css";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const ProtectedRoute = ({ children }) => {
  const { userToken } = useContext(UserContext);

  if (localStorage.getItem("userToken") !== null) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default ProtectedRoute;
