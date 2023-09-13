import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserContextProvider from "./context/UserContext";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Products from "./components/Products/Products";
import Categories from "./components/Categories/Categories";
import Brands from "./components/Brands/Brands";
import Product from "./components/Product/Product";
import NotFound from "./components/NotFound/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/cart", element: <Cart /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:id", element: <Product /> },
      { path: "/categories", element: <Categories /> },
      { path: "/brands", element: <Brands /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
function App() {
  return (
    <UserContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </UserContextProvider>
  );
}

export default App;
