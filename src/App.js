import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { CartContext } from "./context/CartContext";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import Products from "./components/Products/Products";
import Categories from "./components/Categories/Categories";
import Brands from "./components/Brands/Brands";
import Product from "./components/Product/Product";
import WishList from "./components/WishList/WishList";
import NotFound from "./components/NotFound/NotFound";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { useContext, useEffect } from "react";
import { WishListContext } from "./context/WishListContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: "/products",
        element: (
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        ),
      },
      {
        path: "/products/:id",
        element: (
          <ProtectedRoute>
            <Product />
          </ProtectedRoute>
        ),
      },
      {
        path: "/categories",
        element: (
          <ProtectedRoute>
            <Categories />
          </ProtectedRoute>
        ),
      },
      {
        path: "/brands",
        element: (
          <ProtectedRoute>
            <Brands />
          </ProtectedRoute>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <ProtectedRoute>
            <WishList />
          </ProtectedRoute>
        ),
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
function App() {
  const { setUserToken } = useContext(UserContext);
  const { getLoggedUserCart, setCartCount } = useContext(CartContext);
  const { setWishListCount, GetUserWishList } = useContext(WishListContext);

  async function setCartCountData() {
    const { data } = await getLoggedUserCart();
    const res = await GetUserWishList();
    setWishListCount(res?.data?.count);
    await setCartCount(data?.numOfCartItems);
  }
  useEffect(() => {
    if (localStorage.getItem("userToken") !== null) {
      setUserToken(localStorage.getItem("userToken"));
      setCartCountData();
    }
  }, []);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
