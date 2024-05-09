import { Triangle } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import useBrands from '../../../hooks/useBrands';

const Brands = () => {
  const { data, isError, error, isLoading } = useBrands();
  const brands = data?.data?.data;

  if (isLoading) {
    return (
      <div className='h-100vh d-flex align-items-center justify-content-center'>
        <Triangle />
      </div>
    );
  }

  if (isError) {
    return (
      <div className='h-100vh d-flex align-items-center justify-content-center'>
        <p>{error?.response?.data?.message}</p>
      </div>
    );
  }

  return (
    <>
      {brands.map((brand) => (
        <div
          className='col-md-2'
          key={brand.name}
        >
          <Link to={`/brands/${brand.name}`}>
            <div className='box cursor-pointer p-3 text-center hover'>
              <img
                src={brand.image}
                alt={brand.name}
                className='w-100'
              />
              <h4 className='text-main font-md fw-bolder'>{brand.name}</h4>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Brands;
