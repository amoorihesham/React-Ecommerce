import React from 'react';
import Slider from 'react-slick';
import image1 from '../../../Assets/images/slider-image-1.jpeg';
import image2 from '../../../Assets/images/slider-image-2.jpeg';
import image3 from '../../../Assets/images/slider-image-3.jpeg';
import sample1 from '../../../Assets/images/sample-1.jpg';
import sample2 from '../../../Assets/images/sample-2.jpg';

const SliderComp = () => {
	const settings = {
		dots: true,
		infinite: true,
		autoplay: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	};
	return (
		<div className='row g-0'>
			<div className='col-xl-8'>
				<Slider {...settings}>
					<img src={image1} height={400} alt='gallary' className='w-100' />

					<img src={image2} height={400} alt='gallary' className='w-100' />
					<img src={image3} height={400} alt='gallary' className='w-100' />
				</Slider>
			</div>
			<div className='col-xl-4'>
				<img src={sample1} alt='' className='w-100' height={200} />
				<img src={sample2} alt='' className='w-100' height={200} />
			</div>
		</div>
	);
};

export default SliderComp;
