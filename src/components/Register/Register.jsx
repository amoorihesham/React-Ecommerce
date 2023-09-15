import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Register.module.css";
import { useFormik } from "formik";
import { object, string, email, ref } from "yup";
import axios from "axios";
import { Grid } from "react-loader-spinner";

const Register = () => {
  const navigate = useNavigate();
  const [registerErrors, setRegisterErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const phoneRegx = /^(01)[0-9]{9}/;
  const validationSchema = object({
    name: string()
      .min(3, "Name Must Be 3 Chars At Least")
      .max(10, "Name Can Not Be More Than 10 Chars")
      .required("Name Is Required"),
    email: string().email("Email Is Invalid").required("Email Is Required"),
    phone: string()
      .matches(phoneRegx, "Invaild Egypt Phone Formate")
      .required("Required"),
    password: string()
      .min(6, "Password Minimum Is 6 Chars")
      .max(16, "Password Maximum Is 16 Chars")
      .required("Please Set Your Password"),
    rePassword: string()
      .oneOf([ref("password")], "Passwords Did Not Matchs")
      .required("re-Enter Password"),
  });

  const registerSubmite = async (values) => {
    setIsLoading(true);
    const request = await axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signup", values)
      .then((response) => {
        setRegisterErrors("");
        navigate("/login");
      })
      .catch((err) => {
        setRegisterErrors(err.response.data.message);
      });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
    validationSchema,
    onSubmit: registerSubmite,
  });
  return (
    <div className="container h-100vh d-flex align-items-center py-3">
      <form className="w-80 mx-auto" onSubmit={formik.handleSubmit}>
        <h4 className="mb-3">Register Now:</h4>
        {registerErrors ? (
          <div className="alert alert-danger p-2">{registerErrors}</div>
        ) : null}
        <div className="mb-2">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name ? (
            <div className="alert alert-danger p-2 mt-1">
              {formik.errors.name}
            </div>
          ) : null}
        </div>
        <div className="mb-2">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="alert alert-danger p-2 mt-1">
              {formik.errors.email}
            </div>
          ) : null}
        </div>
        <div className="mb-2">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.isValid.name ? (
            <div className="alert alert-danger p-2 mt-1">
              {formik.errors.password}
            </div>
          ) : null}
        </div>
        <div className="mb-2">
          <label htmlFor="repassword">rePassword:</label>
          <input
            type="password"
            name="rePassword"
            id="repassword"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.rePassword}
            onBlur={formik.handleBlur}
          />
          {formik.errors.rePassword && formik.touched.rePassword ? (
            <div className="alert alert-danger p-2 mt-1">
              {formik.errors.rePassword}
            </div>
          ) : null}
        </div>
        <div className="mb-2">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.phone}
            onBlur={formik.handleBlur}
          />
          {formik.errors.phone && formik.touched.phone ? (
            <div className="alert alert-danger p-2 mt-1">
              {formik.errors.phone}
            </div>
          ) : null}
        </div>
        {isLoading ? (
          <button type="submit" disabled className="btn bg-main text-white">
            <Grid
              height="20"
              width="80"
              color="white"
              ariaLabel="grid-loading"
              radius="12.5"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </button>
        ) : (
          <button
            type="submit"
            disabled={!(formik.isValid && formik.dirty)}
            className="btn bg-main text-white"
          >
            Register
          </button>
        )}
      </form>
    </div>
  );
};

export default Register;
