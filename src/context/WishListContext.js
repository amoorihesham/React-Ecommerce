import { createContext, useState } from 'react';
import { api, headers } from '../utils/req_globals';
import axios from 'axios';
import { toast } from 'react-toastify';

export const WishListContext = createContext();

const WishListContextProvider = ({ children }) => {
	const [userWishlist, setUserWishlist] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	async function getLoggedUserWishlist() {
		try {
			const { data } = await axios.get(api.wishlistUrl, headers);
			setUserWishlist({
				count: data?.count,
				wishlist: data?.data,
			});
		} catch (error) {
			setUserWishlist({
				count: 0,
				wishlist: {},
			});
		} finally {
			setIsLoading(false);
		}
	}
	async function addToWishList(prodId) {
		try {
			const { data } = await axios.post(api.wishlistUrl, prodId, headers);

			await getLoggedUserWishlist();
			toast('Success', {
				type: 'success',
			});
		} catch (error) {
			toast(error?.response?.data?.message, {
				type: 'error',
			});
		}
	}
	async function RemoveFromWishList(prodId) {
		try {
			setIsLoading(true);
			const { data } = await axios.delete(`${api.wishlistUrl}/${prodId}`, headers);
			setUserWishlist({
				count: data?.count || 0,
				wishlist: data?.data,
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

	return (
		<WishListContext.Provider
			value={{
				addToWishList,
				getLoggedUserWishlist,
				RemoveFromWishList,
				userWishlist,
				isLoading,
			}}
		>
			{children}
		</WishListContext.Provider>
	);
};
export default WishListContextProvider;
