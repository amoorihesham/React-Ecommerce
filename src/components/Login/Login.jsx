import React, { useContext, useState } from "react";
import style from "./Login.module.css";
import { useFormik } from "formik";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { Audio } from "react-loader-spinner";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { user, setUser, userToken, setUserToken } = useContext(UserContext);

  const LoginSubmit = async (values) => {
    setIsLoading(true);
    const request = await axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signin", values)
      .then((res) => {
        setIsLoading(false);
        localStorage.setItem("userToken", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        console.log(res?.data);
        setUser(res.data.user);
        setUserToken(res.data.token);
        navigate("/");
      })
      .catch((err) => console.log(err));
    // setIsLoading(false);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: LoginSubmit,
  });
  return (
    <div className="container d-flex align-items-center h-100vh">
      <form className="w-80 mx-auto" onSubmit={formik.handleSubmit}>
        <h4 className="mb-3">Login Now:</h4>
        <div className="mb-2">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>
        {isLoading ? (
          <button className="btn bg-main text-white" disabled>
            <Audio
              height="20"
              width="80"
              radius="9"
              color="white"
              ariaLabel="three-dots-loading"
            />
          </button>
        ) : (
          <button className="btn bg-main text-white" type="submit">
            Login
          </button>
        )}
      </form>
      <Link to={"/passwordreset"} className=" text-primary fw-bold">
        Forgot Password?
      </Link>
    </div>
  );
};

export default Login;
