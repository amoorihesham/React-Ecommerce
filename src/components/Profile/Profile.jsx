import React, { useEffect, useState } from "react";
import style from "./Profile.module.css";

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <div className="ProfilePage h-100vh py-4">
      <div className="container">
        <div className="row">
          <div className="col">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={userInfo?.name}
              disabled
              className="form-control"
            />
          </div>
          <div className="col">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              value={userInfo?.email}
              disabled
              className="form-control"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <label htmlFor="role">Role:</label>
            <input
              type="text"
              id="role"
              value={userInfo?.role}
              disabled
              className="form-control"
            />
          </div>
          <div className="col">
            <label htmlFor="orders">Total Orders:</label>
            <input
              type="text"
              id="orders"
              value='241'
              disabled
              className="form-control"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
