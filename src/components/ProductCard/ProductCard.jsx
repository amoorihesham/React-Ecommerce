import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { WishListContext } from "../../context/WishListContext";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ProductCard = ({ product, products }) => {
  const { addToCart, setCartCount } = useContext(CartContext);
  const { addToWishList, setWishListCount, GetUserWishList } =
    useContext(WishListContext);

  async function addToWISHLIST(prodId) {
    const { data } = await addToWishList(prodId);
    const res = await GetUserWishList();
    setWishListCount(res?.data?.count);

    if (data?.status === "success") {
      toast("Product Add Successfully", {
        type: "success",
        autoClose: 1000,
        hideProgressBar: false,
      });
    }
  }
  async function addCart(prodId) {
    const { data } = await addToCart(prodId);
    await setCartCount(data?.numOfCartItems);
    toast("Item Added Successfully", {
      type: "success",
      autoClose: 1000,
      hideProgressBar: false,
    });
  }
  
  return (
    <div className="col-md-3" key={product.id}>
      <div className="product py-2 px-2 cursor-pointer">
        <img src={product.imageCover} alt={product.title} className="w-100" />
        <span className="font-sm text-main fw-bold">
          {product.category.name}
        </span>
        <h3 className="h6 mt-1">
          {product.title.split(" ").slice(0, 2).join(" ")}
        </h3>
        <div className="d-flex align-items-center justify-content-between">
          <p className="fw-bold">{product.price} EGP</p>
          <p>
            <i className="fa-solid fa-star rating-color"></i>{" "}
            {product.ratingsAverage}
          </p>
        </div>
        <button
          className="btn bg-main text-white w-100 btn-sm mb-2"
          onClick={() => addCart({ productId: product._id })}
        >
          <i className="fa-solid fa-cart-plus fs-fw"></i> Add To cart
        </button>
        <button
          className="btn bg-main text-white w-100 btn-sm"
          onClick={() => addToWISHLIST({ productId: product._id })}
        >
          <i className="fa-solid fa-heart-circle-plus fs-fw"></i> Add To
          WishList
        </button>
        <Link
          to={`/products/${product.id}`}
          className="btn bg-main text-white btn-sm w-100 mt-2"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
