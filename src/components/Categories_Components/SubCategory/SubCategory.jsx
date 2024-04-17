import React, { useContext, useEffect, useState } from 'react';
import { Triangle } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const SubCategory = () => {
	const params = useParams();
	const { addToCart, setCartCount } = useContext(CartContext);
	const [mainCateName, setMainCateName] = useState("Women's Fashion");
	const [categoryDetails, setCategoryDetails] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [productList, setProductsLis] = useState(null);

	async function getSubCateDetails() {
		const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/subcategories/${params.id}`);
		const mainCateName = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${data?.data.category}`);
		await setMainCateName(mainCateName?.data.data);
		await setCategoryDetails(data?.data);

		setIsLoading(true);
		const allProducts = await axios.get('https://ecommerce.routemisr.com/api/v1/products');
		const allProds = await allProducts?.data.data;
		const filterdProducts = await allProds.filter((product) => product.category.name === mainCateName?.data.data.name);
		await setProductsLis(filterdProducts);
		setIsLoading(false);
	}
	async function addCart(prodId) {
		const { data } = await addToCart(prodId);
		if (data.status === 'success') {
			await setCartCount(data?.numOfCartItems);
			toast('Item Added Successfully', {
				type: 'success',
				autoClose: 1000,
				hideProgressBar: false,
			});
		}
	}
	useEffect(() => {
		getSubCateDetails();
	}, []);
	return (
		<div className='container py-4'>
			<span className='font-md'>
				Categories / {mainCateName?.name} / <span className='fw-bold'>{categoryDetails?.name}</span>
			</span>
			<div className='row align-items-center'>
				{isLoading ? (
					<Triangle />
				) : (
					<>
						{productList?.length > 0 ? (
							<>
								{productList.map((product) => (
									<div className='col-md-2' key={product.id}>
										{' '}
										<div className='product py-2 px-2 cursor-pointer'>
											<img src={product.imageCover} alt={product.title} className='w-100' />
											<span className='font-sm text-main fw-bold'>{product.category.name}</span>
											<h3 className='h6 mt-1'>{product.title.split(' ').slice(0, 2).join(' ')}</h3>
											<div className='d-flex align-items-center justify-content-between'>
												<p className='fw-bold'>{product.price} EGP</p>
												<p>
													<i className='fa-solid fa-star rating-color'></i> {product.ratingsAverage}
												</p>
											</div>
											<button className='btn bg-main text-white w-100 btn-sm mb-2' onClick={() => addCart({ productId: product._id })}>
												<i className='fa-solid fa-cart-plus fs-fw'></i> Add To cart
											</button>
											<button
												className='btn bg-main text-white w-100 btn-sm'
												// onClick={() => addToWISHLIST({ productId: product._id })}
											>
												<i className='fa-solid fa-heart-circle-plus fs-fw'></i> Add To WishList
											</button>
										</div>
									</div>
								))}
							</>
						) : (
							<h1 className='mt-4'>No Items Here</h1>
						)}
					</>
				)}
			</div>
		</div>
	);
};

export default SubCategory;
