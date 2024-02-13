import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import { Triangle } from "react-loader-spinner";
import { Link } from "react-router-dom";

const Categories = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
  };
  const [categories, setCategories] = useState([]);
  const [isLodaing, setIsLoading] = useState(false);

  async function getAllCategories() {
    setIsLoading(true);
    const { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/categories"
    );
    await setCategories(data.data);
    setIsLoading(false);
  }
  useEffect(() => {
    getAllCategories();
  }, []);
  return (
    <div className="categories py-5 mb-5 mt-5 bg-main-light px-4">
      <div className="container">
        <h2 className="mb-3">Shop Populare Categories</h2>
        <div className="row g-0">
          {isLodaing ? (
            <div className="d-flex -align-items-center justify-content-center">
              <Triangle />
            </div>
          ) : categories ? (
            <Slider {...settings}>
              {categories.map((cate) => (
                <Link
                  to={`/${cate.name}/main_cate_id=/${cate._id}/subcategories`}
                  key={cate.name}
                >
                  <div className="box cursor-pointer">
                    <img
                      src={cate.image}
                      alt=""
                      className="w-100"
                      height={200}
                    />
                    <h3 className=" mt-2 text-center font-sm">{cate.name}</h3>
                  </div>
                </Link>
              ))}
            </Slider>
          ) : (
            "No Categories"
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;
