import React from "react";
import style from "./Register.module.css";

const Register = () => {
  return (
    <div className="container h-100vh d-flex align-items-center py-3">
      <form className="w-80 mx-auto">
        <h4 className="mb-3">Register Now:</h4>
        <div className="mb-2">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" className="form-control" />
        </div>
        <div className="mb-2">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="repassword">rePassword:</label>
          <input
            type="password"
            name="repassword"
            id="repassword"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" name="phone" id="phone" className="form-control" />
        </div>
        <button className="btn bg-main text-white">Register</button>
      </form>
    </div>
  );
};

export default Register;
