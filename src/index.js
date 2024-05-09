import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserContextProvider, CartContextProvider, WishListContextProvider, AddressesContextProvider } from './context';
import App from './App';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const root = ReactDOM.createRoot(document.getElementById('root'));
const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 60 * 1000,
    },
  },
});
root.render(
  <UserContextProvider>
    <AddressesContextProvider>
      <CartContextProvider>
        <WishListContextProvider>
          <QueryClientProvider client={client}>
            <ReactQueryDevtools initialIsOpen={false} />
            <App />
          </QueryClientProvider>
        </WishListContextProvider>
      </CartContextProvider>
    </AddressesContextProvider>
  </UserContextProvider>
);
