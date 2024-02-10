import axios from "axios";
import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";

const UserOrders = () => {
  const userEmail = JSON.parse(localStorage.getItem("user"));
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    const { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/users"
    );

    const user = await data?.users.filter(
      (user) => user.email === userEmail.email
    );

    const order = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/orders/user/${user[0]._id}`
    );
    setOrders(order?.data);
  };
  useEffect(() => {
    getOrders();
  }, []);
  return (
    <div className="cartPage py-2 h-100vh ">
      <div className="container bg-main-light rounded p-4">
        <h3 className="text-main h5">Orders ({orders.length})</h3>
        {orders.map((item) => (
          <div
            className="wishItem d-flex align-items-center border-bottom py-2"
            key={item.id}
          >
            <div className="col-md-10">
              <div className="text-main fs-6 mb-2">
                <span className="fw-bold text-black">Created At: </span>
                {item.createdAt.slice(0, 10)}
              </div>
              <div className="text-main fs-6 mb-2">
                <span className="fw-bold text-black">Deliverd: </span>
                {item.isDelivered ? "Yes" : "No"}
              </div>
              <div className="text-main fs-6 mb-2">
                <span className="fw-bold text-black">Is Paid: </span>
                {item.isPaid ? "Yes" : "No"}
              </div>
              <div className="text-main fs-6 mb-2">
                <span className="fw-bold text-black">payment Method: </span>
                {item.paymentMethodType}
              </div>
              <div className="text-main fs-6 mb-2">
                <span className="fw-bold text-black">Total Price: </span>
                {item.totalOrderPrice}
              </div>
              <div className="text-main fs-6 mb-2">
                <span className="fw-bold text-black">Phone Number: </span>
                {item.shippingAddress.phone}
              </div>
              <div className="text-main fs-6 mb-2">
                <span className="fw-bold text-black">Order Number: </span>
                {item.id}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserOrders;
