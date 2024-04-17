import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const PasswordReset = () => {
	const [email, setEmail] = useState('');
	const [code, setCode] = useState('');
	const [isCodeSend, setIsCodeSend] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await axios
			.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords', {
				email: email,
			})
			.then((res) =>
				toast(res.data.message, {
					type: 'success',
					autoClose: 1000,
					hideProgressBar: false,
				})
			);
		setIsCodeSend(true);
	};

	const handleCode = async (e) => {
		e.preventDefault();
		await axios
			.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode', {
				resetCode: code,
			})
			.then((res) =>
				toast(res.data.message, {
					type: 'success',
					autoClose: 1000,
					hideProgressBar: false,
				})
			);
		navigate('/newpassword');
	};
	return (
		<div className='container py-5'>
			{isCodeSend ? (
				<form onSubmit={handleCode}>
					<input
						className='form-control'
						type='text'
						placeholder='Enter The Reset Code'
						value={code}
						onChange={(e) => setCode(e.target.value)}
					/>
					<button type='submit' className='btn btn-sm bg-main text-white mt-3'>
						Verify
					</button>
				</form>
			) : (
				<form onSubmit={handleSubmit}>
					<input
						className='form-control'
						type='email'
						placeholder='Enter Your Registerd Email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<button type='submit' className='btn btn-sm bg-main text-white mt-3'>
						Reset
					</button>
				</form>
			)}
		</div>
	);
};

export default PasswordReset;
