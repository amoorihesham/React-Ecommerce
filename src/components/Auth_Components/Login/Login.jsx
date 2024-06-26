import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import { UserContext } from '../../../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import { Audio } from 'react-loader-spinner';
import axios from 'axios';

const Login = () => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const { setUser, setUserToken } = useContext(UserContext);

	const LoginSubmit = async (values) => {
		setIsLoading(true);
		const request = await axios
			.post('https://ecommerce.routemisr.com/api/v1/auth/signin', values)
			.then((res) => {
				setIsLoading(false);
				localStorage.setItem('userToken', res.data.token);
				localStorage.setItem('user', JSON.stringify(res.data.user));
				setUser(res.data.user);
				setUserToken(res.data.token);
				navigate('/');
			})
			.catch((err) => console.log(err));
		// setIsLoading(false);
	};
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: LoginSubmit,
	});
	return (
		<div className='container h-100vh d-flex align-items-center '>
			<div className='row align-items-center justify-content-between w-100 g-3'>
				<div className='col-md-9'>
					<form onSubmit={formik.handleSubmit}>
						<h4 className='mb-3'>Login Now:</h4>
						<div className='mb-2'>
							<label htmlFor='email'>Email:</label>
							<input
								type='email'
								name='email'
								id='email'
								className='form-control'
								value={formik.values.email}
								onChange={formik.handleChange}
							/>
						</div>
						<div className='mb-2'>
							<label htmlFor='password'>Password:</label>
							<input
								type='password'
								name='password'
								id='password'
								className='form-control'
								value={formik.values.password}
								onChange={formik.handleChange}
							/>
						</div>
						{isLoading ? (
							<button className='btn bg-main text-white' disabled>
								<Audio height='20' width='80' radius='9' color='white' ariaLabel='three-dots-loading' />
							</button>
						) : (
							<button className='btn bg-main text-white' type='submit'>
								Login
							</button>
						)}
					</form>
				</div>
				<div className='col-md-3 text-center'>
					<Link to={'/passwordreset'} className=' text-primary fw-bold'>
						Forgot Password?
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
