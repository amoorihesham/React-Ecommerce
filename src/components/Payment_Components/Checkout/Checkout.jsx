import React, { useContext, useRef } from 'react';
import axios from 'axios';
import { CartContext } from '../../../context/CartContext';

const Checkout = () => {
	const detailsRef = useRef(null);
	const cityRef = useRef(null);
	const phoneRef = useRef(null);
	const { userCart } = useContext(CartContext);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post(
				`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${userCart?.cartId}?url=https://freshcart-online.vercel.app/`,
				{
					shippingAddress: {
						details: detailsRef?.current.value,
						phone: phoneRef?.current.value,
						city: cityRef?.current.value,
					},
				},
				{ headers: { token: localStorage.getItem('userToken') } }
			);
			if (data.status === 'success') {
				window.location = data?.session.url;
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='container py-5'>
			<form onSubmit={handleSubmit}>
				<input type='text' placeholder='Details' className='form-control mb-3' ref={detailsRef} />
				<input type='text' placeholder='City' className='form-control mb-3' ref={cityRef} />
				<input type='text' placeholder='phone' className='form-control mb-3' ref={phoneRef} />
				<button className='btn btn-sm bg-main text-white'>Procced To Payment</button>
			</form>
		</div>
	);
};

export default Checkout;
