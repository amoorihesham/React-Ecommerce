import axios from "axios";
import React, { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";
import { Link, useParams } from "react-router-dom";

const BrandProducts = () => {
  const params = useParams();
  const [productsList, setProductsList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  async function getAllBrandProducts() {
    setIsLoading(true);
    const { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/products"
    );
    const allProducts = await data?.data;
    const BrandProducts = await allProducts.filter(
      (product) => product.brand.name === params.name
    );
    await setProductsList(BrandProducts);
    setIsLoading(false);
  }
  useEffect(() => {
    getAllBrandProducts();
  }, []);
  return (
    <div className="container py-4">
      <div className="row">
        {isLoading ? (
          <div className="d-flex align-items-center justify-content-center">
            <Triangle />
          </div>
        ) : (
          <>
            {productsList?.length > 0 ? (
              productsList.map((product) => (
                <div className="col-md-2" key={product.id}>
                  <Link to={`/products/${product.id}`}>
                    {" "}
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
                      <button className="btn bg-main text-white w-100 btn-sm mb-2">
                        <i className="fa-solid fa-cart-plus fs-fw"></i> Add To
                        cart
                      </button>
                      <button className="btn bg-main text-white w-100 btn-sm">
                        <i className="fa-solid fa-heart-circle-plus fs-fw"></i>{" "}
                        Add To WishList
                      </button>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <h1>No Items To Show</h1>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BrandProducts;
