import { createBrowserRouter } from 'react-router-dom';
import { Layout, Login, Register, Profile, NotFound, ProtectedRoute, SubCategory, PasswordReset, EnterNewPass, Checkout } from '../components';
import { Home, Products, Categories, Brands, BrandProducts, SubCate } from '../pages';
import { Suspense, lazy } from 'react';
const Cart = lazy(() => import('../pages/cart/Cart.jsx'));
const SingleProductPage = lazy(() => import('../pages/Product_Page/ProductPage.jsx'));
const Wishlist = lazy(() => import('../pages/wishlist/Wishlist.jsx'));
const OrdersPage = lazy(() => import('../pages/Orders/OrdersPage.jsx'));

const app_router = createBrowserRouter([
  {
    path: '/',
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
      {
        path: '/products',
        element: (
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        ),
      },
      {
        path: '/categories',
        element: (
          <ProtectedRoute>
            <Categories />
          </ProtectedRoute>
        ),
      },
      {
        path: '/brands',
        element: (
          <ProtectedRoute>
            <Brands />
          </ProtectedRoute>
        ),
      },
      { path: '/login', element: <Login /> },
      { path: '/passwordreset', element: <PasswordReset /> },
      { path: '/newpassword', element: <EnterNewPass /> },
      { path: '/register', element: <Register /> },
      {
        path: '/profile',
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: '/cart',
        element: (
          <ProtectedRoute>
            <Suspense fallback={'loading....'}>
              <Cart />
            </Suspense>
          </ProtectedRoute>
        ),
      },

      {
        path: '/products/:id',
        element: (
          <ProtectedRoute>
            <Suspense fallback={'loading....'}>
              <SingleProductPage />
            </Suspense>
          </ProtectedRoute>
        ),
      },

      {
        path: '/checkout',
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        ),
      },
      {
        path: '/:name/main_cate_id=/:id/subcategories',
        element: (
          <ProtectedRoute>
            <SubCate />
          </ProtectedRoute>
        ),
      },
      {
        path: '/subcategory/:id/:name',
        element: (
          <ProtectedRoute>
            <SubCategory />
          </ProtectedRoute>
        ),
      },

      {
        path: '/brands/:name',
        element: (
          <ProtectedRoute>
            <BrandProducts />
          </ProtectedRoute>
        ),
      },
      {
        path: '/wishlist',
        element: (
          <ProtectedRoute>
            <Suspense fallback={'loading....'}>
              <Wishlist />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: '/allorders',
        element: (
          <ProtectedRoute>
            <Suspense fallback={'loading....'}>
              <OrdersPage />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default app_router;
