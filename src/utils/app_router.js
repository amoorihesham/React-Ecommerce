import { createBrowserRouter } from "react-router-dom";
import {
  Layout,
  Home,
  Cart,
  Login,
  Register,
  Profile,
  Products,
  Categories,
  Brands,
  Product,
  WishList,
  NotFound,
  ProtectedRoute,
  SubCategories,
  SubCategory,
  BrandProducts,
  PasswordReset,
  EnterNewPass,
  Checkout,
  UserOrders,
} from "../components";

const app_router = createBrowserRouter([
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
      { path: "/passwordreset", element: <PasswordReset /> },
      { path: "/newpassword", element: <EnterNewPass /> },
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
        path: "/checkout",
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        ),
      },
      {
        path: "/categories/:id/subcategories",
        element: (
          <ProtectedRoute>
            <SubCategories />
          </ProtectedRoute>
        ),
      },
      {
        path: "/subcategories/:id",
        element: (
          <ProtectedRoute>
            <SubCategory />
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
        path: "/brands/:name",
        element: (
          <ProtectedRoute>
            <BrandProducts />
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
      {
        path: "/allorders",
        element: (
          <ProtectedRoute>
            <UserOrders />
          </ProtectedRoute>
        ),
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);


export default app_router;