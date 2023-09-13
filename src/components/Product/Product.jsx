import React from "react";
import style from "./Product.module.css";
import image from "../../Assets/1678303526206-cover.jpeg";
const Product = () => {
  return (
    <div className="container h-100vh">
      <div className="box d-flex align-items-center justify-content-between">
        <img src={image} alt="" className=" w-32" />
        <div className="info w-60">
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vel
            sequi sit eveniet
          </h4>
          <p className="fs-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
            et accusamus odio quidem pariatur molestias excepturi cumque quod.
          </p>
          <span>Electronics</span>
          <p className="d-flex align-items-center justify-content-between mt-2">
            <span>27,500 EGP</span>
            <span>
              <i className="fa-solid fa-star rating-color"></i>4.3
            </span>
          </p>
          <button className="btn bg-main text-white mt-2 w-100">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
