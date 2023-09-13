import React from "react";
import style from "./NotFound.module.css";
import image from "../../Assets/images/error.svg";

const NotFound = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center h-100vh py-4">
      <img src={image} alt="" className="img-fluid" />
    </div>
  );
};

export default NotFound;
