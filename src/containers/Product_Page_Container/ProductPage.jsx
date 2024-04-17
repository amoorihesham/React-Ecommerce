import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context';
import { toast } from 'react-toastify';
import { Triangle } from 'react-loader-spinner';
import { SuggestedProducts } from '../../components';
import axios from 'axios';
import Slider from 'react-slick';

const ProductPage = () => {
	const settings = {
		dots: false,

		infinite: true,
		autoplay: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
	};
	const params = useParams();
	const [productDetails, setProductDetails] = useState(null);
	const { addToCart, setCartCount } = useContext(CartContext);
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);

	function setSugProduct(product) {
		setProductDetails(product);
	}
	async function getFeaturedProducts() {
		setLoading(true);
		const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/products').catch((err) => console.log(err));
		setProducts(data.data);
		setLoading(false);
	}
	async function addToCartFromProductPage(prodId) {
		const { data } = await addToCart(prodId);
		await setCartCount(data?.numOfCartItems);

		toast('Item Added Successfully', {
			type: 'success',
			autoClose: 1000,
			hideProgressBar: false,
		});
	}

	useEffect(() => {
		axios
			.get(`https://ecommerce.routemisr.com/api/v1/products/${params.id}`)
			.then((data) => {
				setProductDetails(data?.data.data);
			})
			.catch((err) => console.log(err));
		getFeaturedProducts();
	}, []);
	return (
		<div className='container h-100vh py-5'>
			<div className='row align-items-center justify-content-center'>
				<div className='col-md-4'>
					<Slider {...settings}>
						{productDetails?.images.map((img) => (
							<div key={productDetails?._id}>
								<img src={img} alt={productDetails?.title} className='w-100' />
							</div>
						))}
					</Slider>
				</div>
				<div className='col-md-8'>
					<div className='info'>
						<h4>{productDetails?.title}</h4>
						<p className='fs-6'>{productDetails?.description}</p>
						<span>{productDetails?.category.name}</span>
						<p className='d-flex align-items-center justify-content-between mt-2'>
							<span className='text-main fw-bold'>{productDetails?.price} EGP</span>
							<span>
								<i className='fa-solid fa-star rating-color'></i>
								{productDetails?.ratingsAverage}
							</span>
						</p>
						<button
							className='btn bg-main text-white mt-2 w-100'
							onClick={() => {
								addToCartFromProductPage({ productId: productDetails._id });
							}}
						>
							Add To Cart
						</button>
					</div>
				</div>
			</div>
			<div className='Suggested mt-5 bg-body-secondary p-3'>
				{loading ? (
					<div className=' h-100vh d-flex align-items-center justify-content-center'>
						<Triangle />
					</div>
				) : (
					<SuggestedProducts products={products} product={productDetails} set={setProductDetails} />
				)}
			</div>
		</div>
	);
};

export default ProductPage;
