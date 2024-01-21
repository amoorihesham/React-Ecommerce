import "./App.css";
import { useContext, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { UserContext, CartContext, WishListContext } from "./context";
import { app_router } from "./utils";

function App() {
  const { setUserToken } = useContext(UserContext);
  const { getLoggedUserCart, setCartCount } = useContext(CartContext);
  const { setWishListCount, GetUserWishList } = useContext(WishListContext);

  async function setCartCountData() {
    const { data: cartCount } = await getLoggedUserCart();
    const { data: wishListCount } = await GetUserWishList();

    await setWishListCount(wishListCount?.data?.count);
    await setCartCount(cartCount?.numOfCartItems);
  }

  useEffect(() => {
    if (localStorage.getItem("userToken") !== null) {
      setUserToken(localStorage.getItem("userToken"));
      setCartCountData();
    }
  }, []);

  return <RouterProvider router={app_router}></RouterProvider>;
}

export default App;
