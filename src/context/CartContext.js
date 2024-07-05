import { createContext, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { api, headers } from '../utils/req_globals';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
	const [userCart, setUserCart] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	async function getLoggedUserCart() {
		try {
			const { data } = await axios.get(api.cartUrl, headers);
			setUserCart({
				cartCount: data?.numOfCartItems,
				totalPrice: data?.data?.totalCartPrice,
				products: data?.data?.products,
			});
		} catch (error) {
			if (error?.response?.status === 404) {
				setUserCart({
					cartCount: 0,
					cart: {},
				});
				toast('Your Cart Is Empty.!', {
					type: 'info',
				});
			}
		} finally {
			setIsLoading(false);
		}
	}

	async function addToCart(prodId) {
		try {
			const { data } = await axios.post(api.cartUrl, prodId, headers);
			await getLoggedUserCart();
			toast(data?.message, {
				type: 'success',
			});
		} catch (error) {
			toast(error?.response?.data?.message, {
				type: 'error',
			});
		}
	}

	async function updateCartQyantity(prodId, count) {
		try {
			setIsLoading(true);

			const { data } = await axios.put(
				`${api.cartUrl}/${prodId}`,
				{ count },

				headers
			);

			setUserCart({
				cartCount: data?.numOfCartItems,
				products: data?.data?.products,
				totalPrice: data?.data?.totalCartPrice,
			});
			toast('Success', {
				type: 'success',
			});
		} catch (error) {
			toast(error?.response?.data?.message, {
				type: 'error',
			});
		} finally {
			setIsLoading(false);
		}
	}

	async function removeFromCart(prodId) {
		try {
			setIsLoading(true);
			const { data } = await axios.delete(`${api.cartUrl}/${prodId}`, headers);
			await getLoggedUserCart();
			toast('Success', {
				type: 'success',
			});
		} catch (error) {
			toast(error?.response?.data?.message, {
				type: 'error',
			});
		} finally {
			setIsLoading(false);
		}
	}

	async function clearCart() {
		try {
			const { data } = await axios.delete(api.cartUrl, headers);
			setUserCart({});
			toast('Success', {
				type: 'success',
			});
		} catch (error) {
			toast(error?.response?.data?.message);
		}
	}
	return (
		<CartContext.Provider
			value={{
				addToCart,
				getLoggedUserCart,
				removeFromCart,
				clearCart,
				updateCartQyantity,
				userCart,
				isLoading,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
export default CartContextProvider;
