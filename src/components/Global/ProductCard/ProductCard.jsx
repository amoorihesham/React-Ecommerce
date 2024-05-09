import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { WishListContext, CartContext } from '../../../context';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { addToWishList } = useContext(WishListContext);

  return (
    <div
      className='col-md-3'
      key={product.id}
    >
      <div className='product py-2 px-2 cursor-pointer'>
        <img
          src={product.imageCover}
          alt={product.title}
          className='w-100'
        />
        <span className='font-sm text-main fw-bold'>{product.category.name}</span>
        <h3 className='h6 mt-1'>{product.title.split(' ').slice(0, 2).join(' ')}</h3>
        <div className='d-flex align-items-center justify-content-between'>
          <p className='fw-bold'>{product.price} EGP</p>
          <p>
            <i className='fa-solid fa-star rating-color'></i> {product.ratingsAverage}
          </p>
        </div>
        <button
          className='btn bg-main text-white w-100 btn-sm mb-2'
          onClick={() => addToCart({ productId: product._id })}
        >
          <i className='fa-solid fa-cart-plus fs-fw'></i> Add To cart
        </button>
        <button
          className='btn bg-main text-white w-100 btn-sm'
          onClick={() => addToWishList({ productId: product._id })}
        >
          <i className='fa-solid fa-heart-circle-plus fs-fw'></i> Add To WishList
        </button>
        <Link
          to={`/products/${product.id}`}
          className='btn bg-main text-white btn-sm w-100 mt-2'
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
