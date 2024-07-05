import React, { useContext, useRef } from 'react';
import { UserContext } from '../../../context/UserContext';
import { Link } from 'react-router-dom';
import { Audio } from 'react-loader-spinner';

const Login = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const { isLoading, error, login } = useContext(UserContext);

	return (
		<div className='container h-100vh d-flex align-items-center '>
			<div className='row align-items-center justify-content-between w-100 g-3'>
				<div className='col-md-9'>
					{error && <div className='alert alert-danger'>{error}</div>}
					<form
						onSubmit={(e) => {
							e.preventDefault();
							login(emailRef.current.value, passwordRef.current.value);
						}}
					>
						<h4 className='mb-3'>Login Now:</h4>
						<div className='mb-2'>
							<label htmlFor='email'>Email:</label>
							<input type='email' name='email' ref={emailRef} className='form-control' />
						</div>
						<div className='mb-2'>
							<label htmlFor='password'>Password:</label>
							<input type='password' name='password' ref={passwordRef} className='form-control' />
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
