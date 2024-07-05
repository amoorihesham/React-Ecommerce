import axios from 'axios';
import { createContext, useState } from 'react';
import { api } from '../utils/req_globals';

export const UserContext = createContext();

const UserContextProvider = (props) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(null);
	const login = async (email, password) => {
		try {
			setIsLoading(true);
			const { data } = await axios.post(api.loginUrl, {
				email,
				password,
			});
			console.log(data);
			if (data?.message === 'success') {
				setUser(data?.user);
				setToken(data?.token);
				localStorage.setItem('userToken', data?.token);
				localStorage.setItem('user', JSON.stringify(data?.user));
				window.location.pathname = '/';
			}
		} catch (error) {
			setError(error?.response?.data.message);
		} finally {
			setIsLoading(false);
		}
	};
	const logout = () => {
		localStorage.clear();
		setUser(null);
		setToken(null);
		window.location.pathname = '/login';
	};
	return (
		<UserContext.Provider
			value={{
				isLoading,
				user,
				setUser,
				token,
				setToken,

				error,
				login,
				logout,
			}}
		>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
