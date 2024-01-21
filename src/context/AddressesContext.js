import axios from "axios";
import { createContext } from "react";
import { BaseUrl, headers } from "../utils/req_globals";

export const AddressesContext = createContext();

function AddUserAddress(values) {
  return axios
    .post(`${BaseUrl}/addresses`, values, headers)
    .then((response) => response)
    .catch((err) => err);
}
function GetLoggedUserAddresses() {
  return axios
    .get(`${BaseUrl}/addresses`, headers)
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
