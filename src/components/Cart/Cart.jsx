import React from "react";
import style from "./Cart.module.css";
import image from "../../Assets/1678305677165-cover.jpeg";

const Cart = () => {
  return (
    <div className="cartPage py-2 h-100vh">
      <div className="container">
        <div className="wraper bg-main-light p-4 rounded">
          <h3>Shop Cart:</h3>
          <p className="text-main">Total Cart Price: 1,547 EGP</p>
          <div className="itemBox border-bottom py-2 px-3 d-flex align-items-center justify-content-between">
            <div className="productInfo d-flex align-items-center">
              <img src={image} alt="" className="w-100p" />
              <div className="info mx-3">
                <h5>Title</h5>
                <p className="text-main">Price</p>
                <button className="btn text-white bg-main">
                  <i class="fa-solid fa-eraser  me-1"></i>
                  Remove
                </button>
              </div>
            </div>
            <div className="controlAmount d-flex align-items-center">
              <button className="btn bg-main text-white fs-6 mx-2">+</button>
              <span className="fs-6 fw-bold">3</span>
              <button className="btn bg-main text-white fs-6 mx-2">-</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
