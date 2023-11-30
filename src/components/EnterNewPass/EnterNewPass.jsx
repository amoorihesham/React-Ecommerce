import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EnterNewPass = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword", {
        email: email,
        newPassword: password,
      })
      .then((res) =>
        toast(res.data.message, {
          type: "success",
          autoClose: 1000,
          hideProgressBar: false,
        })
      )
      .catch((err) => console.log(err));
    navigate("/login");
  };
  return (
    <div className="container py-5">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Your Email"
          className="form-control mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Your New Password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-sm bg-main text-white mt-3" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default EnterNewPass;
