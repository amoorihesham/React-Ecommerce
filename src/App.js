import { useContext, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserContext, CartContext, WishListContext } from './context';
import { app_router } from './utils';

import './App.css';

function App() {
  const { setUserToken } = useContext(UserContext);
  const { getLoggedUserCart } = useContext(CartContext);
  const { getLoggedUserWishlist } = useContext(WishListContext);

  useEffect(() => {
    if (localStorage.getItem('userToken') !== null) {
      setUserToken(localStorage.getItem('userToken'));
      getLoggedUserCart();
      getLoggedUserWishlist();
    }
  }, []);

  return <RouterProvider router={app_router}></RouterProvider>;
}

export default App;
