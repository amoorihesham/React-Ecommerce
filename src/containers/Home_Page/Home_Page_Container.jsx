import { SliderComp, Categories, FeaturedProductsPage } from '../../components';

const HomePageContainer = () => {
	return (
		<div className='container py-4 h-100vh'>
			<SliderComp />
			<Categories />
			<FeaturedProductsPage />
		</div>
	);
};

export default HomePageContainer;
