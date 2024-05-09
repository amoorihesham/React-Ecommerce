import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';
import { CartContext } from '../../../context/CartContext';
import { WishListContext } from '../../../context/WishListContext';
import logo from '../../../Assets/images/freshcart-logo.svg';

const Navbar = () => {
  const { setUserToken, userToken, setUser } = useContext(UserContext);
  const { userCart } = useContext(CartContext);
  const { userWishlist } = useContext(WishListContext);
  const navigate = useNavigate();
  const LogOut = () => {
    localStorage.clear();
    setUser(null);
    setUserToken(null);
    navigate('/login');
  };

  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container'>
        <NavLink
          className='navbar-brand'
          to='/'
        >
          <img
            src={logo}
            alt='FreshCart Logo'
          />
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse'
          id='navbarSupportedContent'
        >
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                aria-current='page'
                to='/'
              >
                Home
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink
                className='nav-link'
                to='/products'
              >
                Products
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                to='/categories'
              >
                Categories
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                to='/brands'
              >
                Brands
              </NavLink>
            </li>
          </ul>

          {userToken !== null ? (
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  <i
                    className='fa-solid fa-circle-user fa-fw'
                    style={{ fontSize: '20px' }}
                  ></i>
                </a>

                <ul className='dropdown-menu'>
                  <li>
                    <Link
                      className='dropdown-item'
                      to='/profile'
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <Link
                      className='dropdown-item'
                      to='/cart'
                    >
                      Cart
                      <i className='fa-solid fa-cart-shopping position-relative ms-1'>
                        <span className='cartNumber'>{userCart?.cartCount || 0}</span>
                      </i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='dropdown-item '
                      to='/wishlist'
                    >
                      Wishlist
                      <i className='fa-solid fa-rectangle-list position-relative ms-1'>
                        <span className='cartNumber'>{userWishlist?.count || 0}</span>
                      </i>
                    </Link>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <button
                      onClick={LogOut}
                      className=' dropdown-item btn btn-sm btn-danger'
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          ) : (
            ''
          )}
          {userToken == null ? (
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link
                  className='nav-link'
                  to='/login'
                >
                  Login
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-link'
                  to='/register'
                >
                  Register
                </Link>
              </li>
            </ul>
          ) : (
            ''
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
