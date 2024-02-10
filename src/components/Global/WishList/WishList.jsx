import React, { useContext, useEffect, useState } from "react";
import { WishListContext } from "../../../context/WishListContext";
import { CartContext } from "../../../context/CartContext";
import { toast } from "react-toastify";
import { Triangle } from "react-loader-spinner";

const WishList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [wishItems, setWishItems] = useState(null);
  const {
    GetUserWishList,
    RemoveFromWishList,
    setWishListCount,
    wishListCount,
  } = useContext(WishListContext);
  const { addToCart, getLoggedUserCart, setCartCount } =
    useContext(CartContext);

  async function getUserWishList() {
    await setIsLoading(true);
    const { data } = await GetUserWishList();
    if (data.status === "success") {
      setIsLoading(false);
      await setWishListCount(data?.count);
      await setWishItems(data?.data);
    } else {
      setIsLoading(false);
    }
  }
  async function removeFromWishList(prodId) {
    const { data } = await RemoveFromWishList(prodId);
    await getUserWishList();
    toast("Product Add Successfully", {
      type: "success",
      autoClose: 1000,
      hideProgressBar: false,
    });
  }
  async function addToCartFromWishList(prodId) {
    await addToCart(prodId);
    toast("Product Add Successfully", {
      type: "success",
      autoClose: 1000,
      hideProgressBar: false,
    });
    const { data } = await getLoggedUserCart();
    setCartCount(data?.numOfCartItems);
  }
  useEffect(() => {
    getUserWishList();
  }, []);
  return (
    <div className="cartPage py-2 h-100vh ">
      <div className="container bg-main-light rounded p-4">
        <h3 className="text-main h5">Wish List Items ({wishListCount})</h3>
        {isLoading ? (
          <div className="d-flex align-items-center justify-content-center">
            <Triangle />
          </div>
        ) : wishItems?.length > 0 ? (
          wishItems.map((item) => (
            <div
              className="wishItem d-flex align-items-center border-bottom py-2"
              key={item.id}
            >
              <div className="row align-items-center">
                <div className="col-md-2">
                  <img
                    src={item.imageCover}
                    alt={item.title}
                    className="w-100"
                  />
                </div>
                <div className="col-md-10">
                  <div className="info">
                    <h4 className="mb-2">{item.title}</h4>
                    <p className="mb-2">{item.description}</p>
                    <span className="d-block mb-2 text-main">
                      Price: <strong>{item.price} EGP</strong>
                    </span>
                    <span className="d-block mb-2 fw-bold text-black-50">
                      Sold: {item.sold}{" "}
                    </span>
                    <span className="d-block mb-2">
                      Rating:
                      <span>
                        <i className="fa-solid fa-star rating-color me-1 ms-2"></i>
                        {item.ratingsAverage}
                      </span>
                    </span>
                    <span className="d-block mb-2">
                      Category: {item.category.name}
                    </span>
                    <div className="actions">
                      <button
                        className="btn bg-main text-white me-3"
                        onClick={() => {
                          removeFromWishList(item._id);
                        }}
                      >
                        <i className="fa-solid fa-trash"></i> Remove
                      </button>
                      <button
                        className="btn bg-main text-white"
                        onClick={() => {
                          addToCartFromWishList({ productId: item._id });
                        }}
                      >
                        <i className="fa-solid fa-cart-plus"></i> Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1 className="h5 text-center">No Items To Show</h1>
        )}
      </div>
    </div>
  );
};

export default WishList;
