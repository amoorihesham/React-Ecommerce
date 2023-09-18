import axios from "axios";
import { createContext, useState } from "react";

export const CartContext = createContext();
const BaseUrl = "https://ecommerce.routemisr.com/api/v1/cart";
const headers = {
  token: localStorage.getItem("userToken"),
};

function addToCart(prodId) {
  return axios
    .post(`${BaseUrl}`, prodId, { headers })
    .then((response) => response)
    .catch((err) => err);
}

function getLoggedUserCart() {
  return axios
    .get(`${BaseUrl}`, { headers })
    .then((response) => response)
    .catch((err) => err);
}

function removeFromCart(prodId) {
  return axios
    .delete(`${BaseUrl}/${prodId}`, { headers })
    .then((response) => response)
    .catch((err) => err);
}
function updateCartQyantity(prodId, count) {
  return axios
    .put(
      `https://ecommerce.routemisr.com/api/v1/cart/${prodId}`,
      { count },
      {
        headers,
      }
    )
    .then((response) => response)
    .catch((err) => err);
}
function clearCart() {
  return axios
    .delete(`${BaseUrl}`, { headers })
    .then((response) => response)
    .catch((err) => err);
}
const CartContextProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(null);
  return (
    <CartContext.Provider
      value={{
        addToCart,
        getLoggedUserCart,
        removeFromCart,
        clearCart,
        updateCartQyantity,
        setCartCount,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
