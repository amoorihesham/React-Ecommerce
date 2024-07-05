import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';
import { CartContext } from '../../../context/CartContext';
import { WishListContext } from '../../../context/WishListContext';
import logo from '../../../Assets/images/freshcart-logo.svg';

const Navbar = () => {
	const { token, logout } = useContext(UserContext);
	const { userCart } = useContext(CartContext);
	const { userWishlist } = useContext(WishListContext);

	return (
		<nav className='navbar navbar-expand-lg bg-body-tertiary'>
			<div className='container'>
				<NavLink className='navbar-brand' to='/'>
					<img src={logo} alt='FreshCart Logo' />
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
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<NavLink className='nav-link' aria-current='page' to='/'>
								Home
							</NavLink>
						</li>

						<li className='nav-item'>
							<NavLink className='nav-link' to='/products'>
								Products
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink className='nav-link' to='/categories'>
								Categories
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink className='nav-link' to='/brands'>
								Brands
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink className='nav-link' to='/cart'>
								Cart
								<i className='fa-solid fa-cart-shopping position-relative ms-1'>
									<span className='cartNumber'>{userCart?.cartCount || 0}</span>
								</i>
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink className='nav-link' to='/wishlist'>
								Wishlist
								<i className='fa-solid fa-heart-circle-plus position-relative ms-1'>
									<span className='cartNumber'>{userWishlist?.count || 0}</span>
								</i>
							</NavLink>
						</li>
					</ul>
					{token ? (
						<ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
							<li className='nav-item'>
								<button className='nav-link' onClick={logout}>
									<i className='fa-solid fa-right-from-bracket'></i> logout
								</button>
							</li>
						</ul>
					) : (
						<ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
							<li className='nav-item'>
								<Link className='nav-link' to='/login'>
									Login
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' to='/register'>
									Register
								</Link>
							</li>
						</ul>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
