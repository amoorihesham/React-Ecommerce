import React, { useContext, useEffect, useState } from "react";
import image from "../../Assets/1678305677165-cover.jpeg";
import { CartContext } from "../../context/CartContext";
import { toast } from "react-toastify";
import { Triangle } from "react-loader-spinner";
import { date } from "yup";

const Cart = () => {
  const [cartItems, setCartItems] = useState(null);
  const [cartPrice, setCartPrice] = useState(null);
  const {
    getLoggedUserCart,
    removeFromCart,
    clearCart,
    updateCartQyantity,
    setCartCount,
  } = useContext(CartContext);

  async function removeAllCart() {
    const { data } = await clearCart();
    setCartItems(null);
    await setCartCount(data?.numOfCartItems);
    toast("Cart Cleard Successfully", {
      type: "success",
      autoClose: 1000,
      hideProgressBar: false,
    });
  }
  async function getUserCart(prodId) {
    const { data } = await getLoggedUserCart();
    if (data?.status == "success") {
      await setCartCount(data?.numOfCartItems);
      await setCartItems(data?.data?.products);
      await setCartPrice(data?.data.totalCartPrice);
    }
  }
  async function RemoveFromCart(prodId) {
    const { data } = await removeFromCart(prodId);
    await getUserCart();
    await setCartCount(data?.numOfCartItems);
    console.log(data.numOfCartItems);
    toast("Item Removed Successfully", {
      type: "success",
      autoClose: 1000,
      hideProgressBar: false,
    });
  }
  async function updateItemsCount(prodId, count) {
    const { data } = await updateCartQyantity(prodId, count);
    console.log(data);
    await getUserCart();
  }
  useEffect(() => {
    getUserCart();
  }, []);
  return (
    <div className="cartPage py-2 h-100vh">
      <div className="container">
        <div className="wraper bg-main-light p-4 rounded">
          <h3>Shop Cart:</h3>
          <p className="text-main">Total Cart Price: {cartPrice} EGP</p>
          <p className="text-main">
            Total Cart Items ({cartItems?.length || 0})
          </p>
          <button
            className="btn bg-main text-white mb-4"
            onClick={removeAllCart}
          >
            Clear Cart
          </button>

          {cartItems?.map((item) => (
            <div
              className="row align-items-center py-2 border-bottom "
              key={item.product._id}
            >
              <div className="col-md-8">
                <div className="box d-flex align-items-center gap-3">
                  <img
                    src={item.product.imageCover}
                    alt={item.product.title}
                    className="w-25"
                  />

                  <div className="info">
                    {" "}
                    <h3 className="h5">{item.product.title}</h3>
                    <p className="text-main">{item.price} EGP</p>
                    <p className="text-main fw-bold">
                      {item.product.category.name}
                    </p>
                    <button
                      className="btn text-white bg-main cursor-pointer"
                      onClick={() => {
                        RemoveFromCart(item.product._id);
                      }}
                    >
                      <i className="fa-solid fa-xmark"></i> Remove
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="quantity d-flex align-items-center justify-content-center">
                  <button
                    className="btn btn-sm bg-main text-white font-sm"
                    onClick={() => {
                      updateItemsCount(item.product._id, item.count + 1);
                    }}
                  >
                    +
                  </button>
                  <span className="fw-bold d-inline-block mx-3">
                    {item.count}
                  </span>
                  <button
                    className="btn btn-sm bg-main text-white font-sm"
                    disabled={item.product.count > 0 ? false : true}
                    onClick={() => {
                      updateItemsCount(item.product._id, item.count - 1);
                      console.log(item.count);
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          )) || (
            <div className="d-flex align-items-center justify-content-center">
              <Triangle />
              <h1 className="text-black-50 ms-3">No Items In Your Cart</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
