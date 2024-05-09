import React, { useContext } from 'react';
import { Triangle } from 'react-loader-spinner';
import { CartContext } from '../../../context/CartContext';
import { WishListContext } from '../../../context/WishListContext';

const WishList = () => {
  const { isLoading, userWishlist, RemoveFromWishList } = useContext(WishListContext);
  const { addToCart } = useContext(CartContext);

  if (isLoading) {
    return (
      <div className='cartPage py-2 h-100vh '>
        <div className='container bg-main-light rounded p-4'>
          <div className='d-flex align-items-center justify-content-center'>
            <Triangle />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='cartPage py-2 h-100vh '>
        <div className='container bg-main-light rounded p-4'>
          <h3 className='text-main h5'>Wish List Items ({userWishlist?.count || 0})</h3>

          {userWishlist?.wishlist?.length > 0 ? (
            userWishlist?.wishlist?.map((product) => (
              <div
                className='wishItem d-flex align-items-center border-bottom py-2'
                key={product._id}
              >
                <div className='row align-items-center'>
                  <div className='col-md-2'>
                    <img
                      src={product.imageCover}
                      alt={product.title}
                      className='w-100'
                    />
                  </div>
                  <div className='col-md-10'>
                    <div className='info'>
                      <h4 className='mb-2'>{product.cttitle}</h4>
                      <p className='mb-2'>{product.description}</p>
                      <span className='d-block mb-2 text-main'>
                        Price: <strong>{product.price} EGP</strong>
                      </span>
                      <span className='d-block mb-2 fw-bold text-black-50'>Sold: {product.sold} </span>
                      <span className='d-block mb-2'>
                        Rating:
                        <span>
                          <i className='fa-solid fa-star rating-color me-1 ms-2'></i>
                          {product.ratingsAverage}
                        </span>
                      </span>
                      <span className='d-block mb-2'>Category: {product?.category?.name}</span>
                      <div className='actions'>
                        <button
                          className='btn bg-main text-white me-3'
                          onClick={() => {
                            RemoveFromWishList(product._id);
                          }}
                        >
                          <i className='fa-solid fa-trash'></i> Remove
                        </button>
                        <button
                          className='btn bg-main text-white'
                          onClick={() => {
                            addToCart({ productId: product._id });
                          }}
                        >
                          <i className='fa-solid fa-cart-plus'></i> Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1 className='h5 text-center'>No Items To Show</h1>
          )}
        </div>
      </div>
    );
  }
};

export default WishList;
