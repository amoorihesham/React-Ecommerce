import React, { useEffect, useState } from 'react';
import { useJwt } from 'react-jwt';
import { Triangle } from 'react-loader-spinner';
import UserOrderCard from '../../components/Profile_Components/UserOrders/UserOrders';
import axios from 'axios';

const token = localStorage.getItem('userToken');

const OrdersPage = () => {
	const { decodedToken } = useJwt(token);
	const [userOrders, setUserOrders] = useState([]);
	const [islLodaing, setIsLoading] = useState([]);
	async function getUserOrders() {
		if (!decodedToken) {
			return null;
		}
		const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${decodedToken.id}`);

		setUserOrders(data);
		setIsLoading(false);
	}

	useEffect(() => {
		getUserOrders();
	}, []);
	return (
		<div className='ProfilePage h-100vh py-4'>
			<div className='container'>
				{islLodaing ? (
					<div className='d-flex align-items-center justify-content-center'>
						<Triangle />
					</div>
				) : (
					<div className='user-orders mt-5'>
						<h5 className=' text-main mb-3 fw-bold'>User Orders: ( {userOrders.length} )</h5>
						<div className='row g-4'>
							{userOrders?.map((order, idx) => (
								<UserOrderCard order={order} key={idx} />
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default OrdersPage;
