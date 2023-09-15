import React, { useContext, useEffect, useState } from "react";
import style from "./FeaturedProducts.module.css";
import axios from "axios";
import { Grid } from "react-loader-spinner";

const FeaturedProductsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  async function getFeaturedProducts() {
    setIsLoading(true);
    const { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/products"
    );
    setProducts(data.data);
    setIsLoading(false);
  }
  useEffect(() => {
    getFeaturedProducts();
  }, []);
  return (
    <div className="row">
      {isLoading ? (
        <div className=" h-100vh d-flex align-items-center justify-content-center">
          <Grid
            height="120"
            width="120"
            color="#4fa94d"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <>
          {products.map((product) => (
            <div className="col-md-2" key={product.id}>
              <div className="product py-2 px-2 cursor-pointer">
                <img
                  src={product.imageCover}
                  alt={product.title}
                  className="w-100"
                />
                <span className="font-sm text-main fw-bold">
                  {product.category.name}
                </span>
                <h3 className="h6 mt-1">
                  {product.title.split(" ").slice(0, 2).join(" ")}
                </h3>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="fw-bold">{product.price} EGP</p>
                  <p>
                    <i className="fa-solid fa-star rating-color"></i>{" "}
                    {product.ratingsAverage}
                  </p>
                </div>
                <button className="btn bg-main text-white w-100 btn-sm">
                  Add To cart
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProductsPage;
