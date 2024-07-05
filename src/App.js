import { useContext, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { CartContext, UserContext, WishListContext } from './context';
import { app_router } from './utils';

import './App.css';

function App() {
	const { setUser, setToken } = useContext(UserContext);
	const { getLoggedUserCart } = useContext(CartContext);
	const { getLoggedUserWishlist } = useContext(WishListContext);

	useEffect(() => {
		if (localStorage.getItem('userToken') !== null) {
			setUser(localStorage.getItem('user'));
			setToken(localStorage.getItem('userToken'));
			getLoggedUserCart();
			getLoggedUserWishlist();
		}
	}, []);

	return <RouterProvider router={app_router}></RouterProvider>;
}

export default App;
