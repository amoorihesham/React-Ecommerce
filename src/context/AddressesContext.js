import axios from "axios";
import { createContext } from "react";

export const AddressesContext = createContext();
const BaseUrl = "https://ecommerce.routemisr.com/api/v1/addresses";
const headers = {
  headers: {
    token: localStorage.getItem("userToken"),
  },
};

function AddUserAddress(values) {
  return axios
    .post(`${BaseUrl}`, values, headers)
    .then((response) => response)
    .catch((err) => err);
}

function GetLoggedUserAddresses() {
  return axios
    .get(`${BaseUrl}`, headers)
    .then((response) => response)
    .catch((err) => err);
}

const AddressesContextProvider = ({ children }) => {
  return (
    <AddressesContext.Provider
      value={{ GetLoggedUserAddresses, AddUserAddress }}
    >
      {children}
    </AddressesContext.Provider>
  );
};
export default AddressesContextProvider;
