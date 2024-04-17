import React, { useEffect, useState } from 'react';
import { Triangle } from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import ProductCard from '../ProductCard/ProductCard';
import axios from 'axios';

const FeaturedProductsPage = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [products, setProducts] = useState([]);

	async function getFeaturedProducts() {
		setIsLoading(true);
		const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/products').catch((err) => console.log(err));
		setProducts(data.data);
		setIsLoading(false);
	}

	useEffect(() => {
		getFeaturedProducts();
	}, []);

	return (
		<div className='row'>
			<ToastContainer />
			{isLoading ? (
				<div className=' h-100vh d-flex align-items-center justify-content-center'>
					<Triangle />
				</div>
			) : (
				<>
					{products?.map((product) => (
						<ProductCard product={product} key={product.id} />
					))}
				</>
			)}
		</div>
	);
};

export default FeaturedProductsPage;
