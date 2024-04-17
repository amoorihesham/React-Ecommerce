import React, { useEffect, useState } from 'react';
import { Triangle } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Brands = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [brands, setBrands] = useState([]);
	async function getAllBrands() {
		setIsLoading(true);
		const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/brands');
		await setBrands(data.data);
		setIsLoading(false);
	}

	useEffect(() => {
		getAllBrands();
	}, []);
	return (
		<>
			{isLoading ? (
				<div className='h-100vh d-flex align-items-center justify-content-center'>
					{' '}
					<Triangle />
				</div>
			) : (
				<>
					{brands.map((brand) => (
						<div className='col-md-2' key={brand.name}>
							<Link to={`/brands/${brand.name}`}>
								{' '}
								<div className='box cursor-pointer p-3 text-center hover'>
									<img src={brand.image} alt={brand.name} className='w-100' />
									<h4 className='text-main font-md fw-bolder'>{brand.name}</h4>
								</div>
							</Link>
						</div>
					))}
				</>
			)}
		</>
	);
};

export default Brands;
