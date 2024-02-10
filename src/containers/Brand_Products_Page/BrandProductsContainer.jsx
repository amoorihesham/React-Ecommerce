import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../components";
import { Triangle } from "react-loader-spinner";

const BrandProductsContainer = () => {
  const params = useParams();
  const [productsList, setProductsList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  async function getAllBrandProducts() {
    setIsLoading(true);
    const { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/products"
    );
    const allProducts = await data?.data;
    const BrandProducts = await allProducts.filter(
      (product) => product.brand.name === params.name
    );
    await setProductsList(BrandProducts);
    setIsLoading(false);
  }
  useEffect(() => {
    getAllBrandProducts();
  }, []);
  return (
    <div className={params.name}>
      <div className="container py-4">
        <div className="row">
          {isLoading ? (
            <div className="d-flex align-items-center justify-content-center">
              <Triangle />
            </div>
          ) : (
            <>
              {productsList?.length > 0 ? (
                productsList.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))
              ) : (
                <h1>No Items To Show</h1>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandProductsContainer;
