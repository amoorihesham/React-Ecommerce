import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../../';
import axios from 'axios';

const SubCategories = () => {
	const [products, setProducts] = useState([]);
	const [subCategories, setSubCategories] = useState(null);
	const params = useParams();

	async function getAllSubCategories() {
		const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${params.id}/subcategories`);
		setSubCategories(data?.data);
	}
	async function filterCateProducts() {
		const data = await axios.get('https://ecommerce.routemisr.com/api/v1/products');
		const fillter = data.data.data.filter((prod) => prod.category._id == params.id);
		console.log(data.data.data);
		console.log(fillter);
		setProducts(fillter);
	}
	async function getProductsInSubCategory(term) {
		const sub = products.filter((prod) => prod.subcategory[0]._id == term);
		setProducts(sub);
	}
	useEffect(() => {
		getAllSubCategories();
		filterCateProducts();
	}, []);
	return (
		<div className='container py-4'>
			<div className=' d-flex gap-3 overflow-x-scroll'>
				{subCategories?.map((subCate) => (
					<span
						key={subCate._id}
						className=' w-95 bg-light py-2 px-3 d-flex align-items-center justify-content-center font-sm rounded fw-semibold cursor-pointer'
						onClick={() => getProductsInSubCategory(subCate._id)}
					>
						{subCate.name}
					</span>
				))}
			</div>
			<div className='row mt-4 g-4'>
				{products.length > 0 ? products.map((product) => <ProductCard key={product.id} product={product} />) : <h2>No Items Founded.</h2>}
			</div>
		</div>
	);
};

export default SubCategories;
