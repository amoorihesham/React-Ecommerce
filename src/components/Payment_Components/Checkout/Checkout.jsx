import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../../context/CartContext';
import axios from 'axios';

const Checkout = () => {
	const [details, setDetails] = useState('');
	const [city, setCity] = useState('');
	const [phone, setPhone] = useState('');
	const [cartId, setCartId] = useState(null);
	const { getLoggedUserCart } = useContext(CartContext);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const {
			data: { status, session },
		} = await axios.post(
			`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=https://react-ecommerce-delta-woad.vercel.app`,
			{
				shippingAddress: {
					details,
					phone,
					city,
				},
			},
			{ headers: { token: localStorage.getItem('userToken') } }
		);

		if (status === 'success') {
			window.location = session?.url;
		}
	};

	const CartId = async () => {
		const { data } = await getLoggedUserCart();
		setCartId(data?.data._id);
	};

	useEffect(() => {
		CartId();
	}, []);
	return (
		<div className='container py-5'>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Details'
					className='form-control mb-3'
					value={details}
					onChange={(e) => setDetails(e.target.value)}
				/>
				<input type='text' placeholder='City' className='form-control mb-3' value={city} onChange={(e) => setCity(e.target.value)} />
				<input type='text' placeholder='phone' className='form-control mb-3' value={phone} onChange={(e) => setPhone(e.target.value)} />
				<button className='btn btn-sm bg-main text-white'>Procced To Payment</button>
			</form>
		</div>
	);
};

export default Checkout;
