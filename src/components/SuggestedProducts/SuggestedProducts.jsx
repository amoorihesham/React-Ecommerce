import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SuggestedProducts = ({ products, product, set }) => {
  const [sugProducts, setSugProducts] = useState([]);

  function handleSug(product) {
    let filterd = products.filter(
      (prod) =>
        prod.category.name == product.category.name && prod.id != product.id
    );
    setSugProducts(filterd);
    set(product);
  }

  useEffect(() => {
    let filterd = products.filter(
      (prod) =>
        prod.category.name == product.category.name && prod.id != product.id
    );
    setSugProducts(filterd);
  }, []);
  return (
    <div className="">
      <h5 className="fw-bold mb-3">Related Products.</h5>
      <div className="row">
        {sugProducts ? (
          sugProducts.slice(0, 5).map((sugProd) => (
            <div
              className="col"
              key={sugProd.id}
              onClick={() => handleSug(sugProd)}
            >
              <Link to={`/products/${sugProd.id}`}>
                <img
                  src={sugProd.imageCover}
                  className="w-100 mb-3"
                  alt={sugProd.title}
                />
                <div className="detials d-flex align-items-center justify-content-between">
                  <h6 className="m-0 fw-semibold">{sugProd.title}</h6>
                  <p className=" text-main m-0">${sugProd.price}</p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <h4 className="text-center">
            No Suggested Product In This Category.
          </h4>
        )}
      </div>
    </div>
  );
};

export default SuggestedProducts;
