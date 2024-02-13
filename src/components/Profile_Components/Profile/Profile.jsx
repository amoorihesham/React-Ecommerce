import axios from "axios";
import avatarImg from "../../../Assets/man.png";
import React, { useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import { object, ref, string } from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import UserOrderCard from "../UserOrders/UserOrders";
import { Triangle } from "react-loader-spinner";

const token = localStorage.getItem("userToken");
const Profile = () => {
  const validationSchema = object({
    cPassword: string()
      .min(6, "Password Minimum Is 6 Chars")
      .max(16, "Password Maximum Is 16 Chars")
      .required("Please Set Your Password"),
    password: string()
      .min(6, "Password Minimum Is 6 Chars")
      .max(16, "Password Maximum Is 16 Chars")
      .required("Please Set Your Password"),
    rePassword: string()
      .oneOf([ref("password")], "Passwords Did Not Matchs")
      .required("re-Enter Password"),
  });
  const { decodedToken, isExpired } = useJwt(token);
  const [userData, setUserData] = useState([]);
  const [reqChangepass, setReqChangePass] = useState(false);
  const [changePassErrors, setChangePassErrors] = useState("");
  const [userOrders, setUserOrders] = useState([]);
  const [islLodaing, setIsLoading] = useState([]);

  async function getUserOrders() {
    if (!decodedToken) {
      return null;
    }
    const { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/orders/user/${decodedToken.id}`
    );

    setUserOrders(data);
    setIsLoading(false);
  }
  const changePassword = async (values) => {
    setIsLoading(true);
    const request = await axios
      .put(
        "https://ecommerce.routemisr.com/api/v1/users/changeMyPassword",
        {
          currentPassword: values.cPassword,
          password: values.password,
          rePassword: values.rePassword,
        },
        {
          headers: {
            token,
          },
        }
      )
      .then((response) => {
        setChangePassErrors("");
        toast(response.data.message);
        setReqChangePass(false);
      })
      .catch((err) => {
        toast(err.response.data.message, {
          type: "error",
        });
      });
  };

  const formik = useFormik({
    initialValues: {
      cPassword: "",
      password: "",
      rePassword: "",
    },
    validationSchema,
    onSubmit: changePassword,
  });

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("user")));
    getUserOrders();
  }, [decodedToken]);

  return (
    <div className="ProfilePage h-100vh py-4">
      <div className="container">
        <div className="topInfo d-flex align-items-center justify-content-between">
          <div className="left d-flex align-items-center">
            <img src={avatarImg} alt="Avatar Profile" className=" w-64p" />
            <div className="info ms-3">
              <h3 className=" h5 fw-semibold m-0">{userData.name}</h3>
              <h6 className=" fs-6 text-black-50 m-0 mt-1 ">
                {userData.email}
              </h6>
            </div>
          </div>
          <div className="right d-flex gap-3">
            <button
              className="btn bg-main text-white"
              onClick={() => setReqChangePass(true)}
            >
              Change Password
            </button>
          </div>
        </div>
        {changePassErrors ? <p>{changePassErrors}</p> : ""}
        {reqChangepass ? (
          <div className="user-password mt-5">
            <form onSubmit={formik.handleSubmit} className=" w-32">
              <div className="mb-3">
                <label htmlFor="cPassword">New Password:</label>
                <input
                  type="password"
                  name="cPassword"
                  id="cPassword"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.cPassword}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password">New Password:</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div>
                <label htmlFor="rePassword">Confirm Password:</label>
                <input
                  type="password"
                  name="rePassword"
                  id="rePassword"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.rePassword}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="actions mt-3 d-flex align-items-center justify-content-between">
                <button
                  type="submit"
                  disabled={!(formik.isValid && formik.dirty)}
                  className="btn bg-main text-white"
                >
                  Change
                </button>
                <button
                  className="btn bg-main text-white"
                  onClick={() => setReqChangePass(false)}
                >
                  Cancle
                </button>
              </div>
            </form>
          </div>
        ) : (
          ""
        )}
        {islLodaing ? (
          <div className="d-flex align-items-center justify-content-center">
            <Triangle />
          </div>
        ) : (
          <div className="user-orders mt-5">
            <h5 className=" text-main mb-3 fw-bold">
              User Orders: ( {userOrders.length} )
            </h5>
            <div className="row">
              {userOrders?.map((order, idx) => (
                <UserOrderCard order={order} key={idx} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
