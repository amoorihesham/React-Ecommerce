import { createBrowserRouter } from 'react-router-dom';
import {
	Layout,
	Login,
	Register,
	Profile,
	NotFound,
	ProtectedRoute,
	SubCategory,
	PasswordReset,
	EnterNewPass,
	Checkout,
} from '../components';
import { Home, Products, Categories, Brands, BrandProducts, SingleProductPage, Cart, Wishlist, SubCate } from '../pages';
import OrdersPage from '../pages/Orders/OrdersPage';

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
						<Cart />
					</ProtectedRoute>
				),
			},

			{
				path: '/products/:id',
				element: (
					<ProtectedRoute>
						<SingleProductPage />
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
						<Wishlist />
					</ProtectedRoute>
				),
			},
			{
				path: '/allorders',
				element: (
					<ProtectedRoute>
						<OrdersPage />
					</ProtectedRoute>
				),
			},
			{ path: '*', element: <NotFound /> },
		],
	},
]);

export default app_router;
