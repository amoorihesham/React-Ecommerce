import axios from "axios";
import { createContext, useState } from "react";
import { BaseUrl, headers } from "../utils/req_globals";
export const CartContext = createContext();

function addToCart(prodId) {
  return axios
    .post(`${BaseUrl}/cart`, prodId, { headers })
    .then((response) => response)
    .catch((err) => err);
}

function getLoggedUserCart() {
  return axios
    .get(`${BaseUrl}/cart`, { headers })
    .then((response) => response)
    .catch((err) => err);
}

function removeFromCart(prodId) {
  return axios
    .delete(`${BaseUrl}/cart/${prodId}`, { headers })
    .then((response) => response)
    .catch((err) => err);
}
function updateCartQyantity(prodId, count) {
  return axios
    .put(
      `${BaseUrl}/cart/${prodId}`,
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
    .delete(`${BaseUrl}/cart`, { headers })
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
