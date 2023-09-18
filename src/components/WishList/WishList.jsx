import React, { useContext, useEffect, useState } from "react";
import { WishListContext } from "../../context/WishListContext";
import { CartContext } from "../../context/CartContext";
import { toast } from "react-toastify";
import { Triangle } from "react-loader-spinner";

const WishList = () => {
  const {
    GetUserWishList,
    RemoveFromWishList,
    setWishListCount,
    wishListCount,
  } = useContext(WishListContext);
  const { addToCart, getLoggedUserCart, setCartCount } =
    useContext(CartContext);
  const [wishItems, setWishItems] = useState(null);

  async function getUserWishList() {
    const { data } = await GetUserWishList();
    await setWishListCount(data?.count);
    await setWishItems(data?.data);
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
        {wishItems?.map((item) => (
          <div
            className="wishItem d-flex align-items-center border-bottom py-2"
            key={item.id}
          >
            <div className="row align-items-center">
              <div className="col-md-2">
                <img src={item.imageCover} alt={item.title} className="w-100" />
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
        )) || (
          <div className="d-flex align-items-center justify-content-center">
            <Triangle />
            <h1 className="text-black-50 ms-3">No Items In Your Wish List</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishList;
