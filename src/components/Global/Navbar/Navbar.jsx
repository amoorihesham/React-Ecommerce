import { useContext } from "react";
import logo from "../../../Assets/images/freshcart-logo.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import { CartContext } from "../../../context/CartContext";
import { WishListContext } from "../../../context/WishListContext";

const Navbar = () => {
  const { setUserToken, userToken, setUser } = useContext(UserContext);
  const { cartCount } = useContext(CartContext);
  const { wishListCount } = useContext(WishListContext);
  const navigate = useNavigate();
  const LogOut = () => {
    localStorage.clear();
    setUser(null);
    setUserToken(null);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="FreshCart Logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {userToken !== null ? (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/categories">
                  Categories
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/brands">
                  Brands
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link position-relative" to={"/cart"}>
                  Cart <i className="fa-solid fa-cart-shopping"></i>
                  <span className="cartNumber">
                    {cartCount ? cartCount : 0}
                  </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link position-relative"
                  to={"/wishlist"}
                >
                  WishList <i className="fa-solid fa-rectangle-list"></i>
                  <span className="cartNumber">
                    {wishListCount ? wishListCount : 0}
                  </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">
                  Profile
                </NavLink>
              </li>
            </ul>
          ) : null}

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item d-flex align-items-center">
              <i className="fab fa-facebook mx-2"></i>
              <i className="fab fa-twitter mx-2"></i>
              <i className="fab fa-instagram mx-2"></i>
              <i className="fab fa-tiktok mx-2"></i>
              <i className="fab fa-youtube mx-2"></i>
            </li>
            {userToken !== null ? (
              <li className="nav-item">
                <span
                  className="nav-link cursor-pointer"
                  aria-current="page"
                  onClick={LogOut}
                >
                  LogOut
                </span>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
