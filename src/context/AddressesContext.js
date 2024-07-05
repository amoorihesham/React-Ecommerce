import { createContext } from 'react';
import { api, headers } from '../utils/req_globals';
import axios from 'axios';

export const AddressesContext = createContext();

function AddUserAddress(values) {
	return axios
		.post(api.addressUrl, values, headers)
		.then((response) => response)
		.catch((err) => err);
}
function GetLoggedUserAddresses() {
	return axios
		.get(api.addressUrl, headers)
		.then((response) => response)
		.catch((err) => err);
}

const AddressesContextProvider = ({ children }) => {
	return <AddressesContext.Provider value={{ GetLoggedUserAddresses, AddUserAddress }}>{children}</AddressesContext.Provider>;
};
export default AddressesContextProvider;
