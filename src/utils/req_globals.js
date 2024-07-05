export const api = {
	baseUrl: 'https://ecommerce.routemisr.com/api/v1',
	loginUrl: 'https://ecommerce.routemisr.com/api/v1/auth/signin',
	registerUrl: 'https://ecommerce.routemisr.com/api/v1/auth/signup',
	productsUrl: 'https://ecommerce.routemisr.com/api/v1/products',
	addressUrl: 'https://ecommerce.routemisr.com/api/v1/addresses',
	cartUrl: 'https://ecommerce.routemisr.com/api/v1/cart',
	wishlistUrl: 'https://ecommerce.routemisr.com/api/v1/wishlist',
};
export const headers = {
	headers: {
		token: localStorage.getItem('userToken'),
	},
};
