import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Triangle } from 'react-loader-spinner';
import { CartContext } from '../../../context/CartContext';

const Cart = () => {
  const { isLoading, userCart, updateCartQyantity, removeFromCart, clearCart } = useContext(CartContext);

  if (isLoading) {
    return (
      <div className='cartPage py-2 h-100vh'>
        <div className='container'>
          <div className='wraper bg-main-light p-4 rounded'>
            <div className='d-flex align-items-center justify-content-center'>
              <Triangle />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='cartPage py-2 h-100vh'>
        <div className='container'>
          <div className='wraper bg-main-light p-4 rounded'>
            <h3>Shop Cart:</h3>
            <p className='text-main'>Total Cart Price: {userCart?.cart?.totalCartPrice || 0} EGP</p>
            <p className='text-main'>Total Cart Items ({userCart?.cartCount || 0})</p>
            <button
              className='btn bg-main text-white mb-4'
              onClick={clearCart}
            >
              Clear Cart
            </button>

            {userCart?.cart?.products?.length > 0 ? (
              userCart?.cart?.products?.map((product) => (
                <div
                  className='row align-items-center py-2 border-bottom '
                  key={product?._id}
                >
                  <div className='col-md-8'>
                    <div className='box d-flex align-items-center gap-3'>
                      <img
                        src={product?.product?.imageCover}
                        alt={product?.product?.title}
                        className='w-25'
                      />

                      <div className='info'>
                        <h3 className='h5'>{product?.product?.title}</h3>
                        <p className='text-main'>{product?.price} EGP</p>
                        <p className='text-main fw-bold'>{product?.product?.category?.name}</p>
                        <button
                          className='btn text-white bg-main cursor-pointer'
                          disabled={isLoading}
                          onClick={() => {
                            removeFromCart(product?.product?._id);
                          }}
                        >
                          <i className='fa-solid fa-xmark'></i> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='quantity d-flex align-items-center justify-content-center'>
                      <button
                        className='btn btn-sm bg-main text-white font-sm'
                        disabled={isLoading}
                        onClick={() => {
                          updateCartQyantity(product?.product?._id, product?.count + 1);
                        }}
                      >
                        +
                      </button>
                      <span className='fw-bold d-inline-block mx-3'>{product?.count}</span>
                      <button
                        className='btn btn-sm bg-main text-white font-sm'
                        disabled={product?.count > 1 ? false : true}
                        onClick={() => {
                          updateCartQyantity(product?.product?._id, product?.count - 1);
                        }}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1 className='h5 text-center'>No Items To Show</h1>
            )}

            <Link
              className='btn bn-sm bg-main text-white mt-3 ms-auto w-50'
              to={'/checkout'}
            >
              Procced To checkout
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default Cart;
