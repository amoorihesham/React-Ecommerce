import { createBrowserRouter } from 'react-router-dom';
import { Layout, NotFound, ProtectedRoute, SubCategory, Checkout } from '../components';
import { Home, BrandProducts, SubCate } from '../pages';
import { Suspense, lazy } from 'react';
const Login = lazy(() => import('../components/Auth_Components/Login/Login.jsx'));
const Register = lazy(() => import('../components/Auth_Components/Register/Register.jsx'));
const PasswordReset = lazy(() => import('../components/Auth_Components/PasswordReset/PasswordReset.jsx'));
const EnterNewPass = lazy(() => import('../components/Auth_Components/EnterNewPass/EnterNewPass.jsx'));
const Profile = lazy(() => import('../components/Profile_Components/Profile/Profile.jsx'));
const Cart = lazy(() => import('../pages/cart/Cart.jsx'));
const SingleProductPage = lazy(() => import('../pages/Product_Page/ProductPage.jsx'));
const Wishlist = lazy(() => import('../pages/wishlist/Wishlist.jsx'));
const OrdersPage = lazy(() => import('../pages/Orders/OrdersPage.jsx'));
const BrandProducts = lazy(() => import('../pages/Brand_Products/Brand_Products.jsx'));
const Categories = lazy(() => import('../pages/categories/Categories.jsx'));
const Products = lazy(() => import('../pages/products/Products.jsx'));

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
          <Suspense fallback={'loading...'}>
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: '/categories',
        element: (
          <Suspense fallback={'loading...'}>
            <ProtectedRoute>
              <Categories />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: '/brands',
        element: (
          <Suspense fallback={'loading...'}>
            <ProtectedRoute>
              <BrandProducts />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: '/login',
        element: (
          <Suspense fallback={'loading...'}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: '/passwordreset',
        element: (
          <Suspense fallback={'loading...'}>
            <PasswordReset />
          </Suspense>
        ),
      },
      {
        path: '/newpassword',
        element: (
          <Suspense fallback={'loading...'}>
            <EnterNewPass />
          </Suspense>
        ),
      },
      {
        path: '/register',
        element: (
          <Suspense fallback={'loading...'}>
            <Register />
          </Suspense>
        ),
      },
      {
        path: '/profile',
        element: (
          <Suspense fallback={'loading...'}>
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          </Suspense>
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
