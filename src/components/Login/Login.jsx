import React from "react";
import style from "./Login.module.css";

const Login = () => {
  return (
    <div className="container d-flex align-items-center h-100vh">
      <form className="w-80 mx-auto">
        <h4 className="mb-3">Login Now:</h4>
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

        <button className="btn bg-main text-white">Login</button>
      </form>
    </div>
  );
};

export default Login;
