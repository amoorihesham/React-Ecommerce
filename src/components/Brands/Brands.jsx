import React, { useEffect, useState } from "react";
import axios from "axios";
import { Triangle } from "react-loader-spinner";

const Brands = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [brands, setBrands] = useState([]);
  async function getAllBrands() {
    setIsLoading(true);
    const { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/brands"
    );
    await setBrands(data.data);
    setIsLoading(false);
  }
  async function getSpecifiedBrand(brandId) {
    const { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/brands/${brandId}`
    );
    const brand = await data.data;
    console.log(brand);
  }
  useEffect(() => {
    getAllBrands();
  }, []);
  return (
    <div className="Brands py-5">
      <div className="container">
        <div className="row">
          {isLoading ? (
            <div className="h-100vh d-flex align-items-center justify-content-center">
              {" "}
              <Triangle />
            </div>
          ) : (
            <>
              {brands.map((brand) => (
                <div className="col-md-2" key={brand.name}>
                  <div
                    className="box cursor-pointer p-3 text-center hover"
                    onClick={() => {
                      getSpecifiedBrand(brand._id);
                    }}
                  >
                    <img src={brand.image} alt={brand.name} className="w-100" />
                    <h4 className="text-main font-md fw-bolder">
                      {brand.name}
                    </h4>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Brands;
