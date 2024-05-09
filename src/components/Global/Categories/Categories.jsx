import { Link } from 'react-router-dom';
import { Triangle } from 'react-loader-spinner';
import Slider from 'react-slick';
import useCategories from '../../../hooks/useCategoris';

const Categories = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
  };

  const { data, isError, error, isPending } = useCategories();

  if (isError) {
    return (
      <div className='categories py-5 mb-5 mt-5 bg-main-light px-4'>
        <div className='container'>
          <h2 className='mb-3'>Shop Populare Categories</h2>
          <div className='row g-0'>
            <h3 className='mt-4'>{error.response.data.message}</h3>
          </div>
        </div>
      </div>
    );
  }
  if (isPending) {
    return (
      <div className='categories py-5 mb-5 mt-5 bg-main-light px-4'>
        <div className='container'>
          <h2 className='mb-3'>Shop Populare Categories</h2>
          <div className='row g-0'>
            <div className='d-flex -align-items-center justify-content-center'>
              <Triangle />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='categories py-5 mb-5 mt-5 bg-main-light px-4'>
      <div className='container'>
        <h2 className='mb-3'>Shop Populare Categories</h2>
        <div className='row g-0'>
          <Slider {...settings}>
            {data?.data?.data.map((cate) => (
              <Link
                to={`/${cate.name}/main_cate_id=/${cate._id}/subcategories`}
                key={cate.name}
              >
                <div className='box cursor-pointer'>
                  <img
                    src={cate.image}
                    alt=''
                    className='w-100'
                    height={200}
                  />
                  <h3 className=' mt-2 text-center font-sm'>{cate.name}</h3>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Categories;
