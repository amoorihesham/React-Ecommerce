import { useContext, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserContext, CartContext } from './context';
import { app_router } from './utils';
import './App.css';

const client = new QueryClient();

function App() {
  const { setUserToken } = useContext(UserContext);
  const { getLoggedUserCart } = useContext(CartContext);

  useEffect(() => {
    if (localStorage.getItem('userToken') !== null) {
      setUserToken(localStorage.getItem('userToken'));
      getLoggedUserCart();
    }
  }, []);

  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={app_router}></RouterProvider>
    </QueryClientProvider>
  );
}

export default App;
