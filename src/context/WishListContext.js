import axios from "axios";
import { createContext, useState } from "react";

export const WishListContext = createContext();
const BaseUrl = "https://ecommerce.routemisr.com/api/v1/wishlist";
const headers = {
  headers: {
    token: localStorage.getItem("userToken"),
  },
};
function addToWishList(prodId) {
  return axios
    .post(`${BaseUrl}`, prodId, headers)
    .then((response) => response)
    .catch((err) => err);
}
function GetUserWishList(prodId) {
  return axios
    .get(`${BaseUrl}`, headers)
    .then((response) => response)
    .catch((err) => err);
}
function RemoveFromWishList(prodId) {
  return axios
    .delete(`${BaseUrl}/${prodId}`, headers)
    .then((response) => response)
    .catch((err) => err);
}

const WishListContextProvider = ({ children }) => {
  const [wishListCount, setWishListCount] = useState(null);
  return (
    <WishListContext.Provider
      value={{
        addToWishList,
        GetUserWishList,
        RemoveFromWishList,
        setWishListCount,
        wishListCount,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};
export default WishListContextProvider;
