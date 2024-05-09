import { Triangle } from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import ProductCard from '../ProductCard/ProductCard';
import useProducts from '../../../hooks/useProducts';

const FeaturedProductsPage = () => {
  const { data, isError, error, isLoading } = useProducts();

  const products = data?.data?.data;
  console.log(products);
  if (isLoading) {
    return (
      <div className='row'>
        <div className=' h-100vh d-flex align-items-center justify-content-center'>
          <Triangle />
        </div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className='row'>
        <div className=' h-100vh d-flex align-items-center justify-content-center'>
          <p>{error?.response?.data?.message}</p>
        </div>
      </div>
    );
  }
  return (
    <div className='row'>
      <ToastContainer />

      {products?.length > 0 ? (
        products?.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
          />
        ))
      ) : (
        <p>No Products To Show.</p>
      )}
    </div>
  );
};

export default FeaturedProductsPage;
