import axios from "axios";
import { createContext, useState } from "react";
import { BaseUrl, headers } from "../utils/req_globals";

export const WishListContext = createContext();

function addToWishList(prodId) {
  return axios
    .post(`${BaseUrl}/wishlist`, prodId, headers)
    .then((response) => response)
    .catch((err) => err);
}
function GetUserWishList() {
  return axios
    .get(`${BaseUrl}/wishlist`, headers)
    .then((response) => response)
    .catch((err) => err);
}
function RemoveFromWishList(prodId) {
  return axios
    .delete(`${BaseUrl}/wishlist/${prodId}`, headers)
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
