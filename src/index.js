import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  UserContextProvider,
  CartContextProvider,
  WishListContextProvider,
  AddressesContextProvider,
} from "./context";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContextProvider>
    <AddressesContextProvider>
      <CartContextProvider>
        <WishListContextProvider>
          <App />
        </WishListContextProvider>
      </CartContextProvider>
    </AddressesContextProvider>
  </UserContextProvider>
);
