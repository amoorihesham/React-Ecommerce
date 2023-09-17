import React, { useEffect, useState } from "react";
import style from "./Categories.module.css";
import axios from "axios";
import Slider from "react-slick";

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
  async function getAllCategories() {
    const { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/categories"
    );
    setCategories(data.data);
  }
  useEffect(() => {
    getAllCategories();
  }, []);
  return (
    <div className="categories py-5 mb-5 mt-5 bg-main-light px-4">
      <div className="container">
        <h2 className="mb-3">Shop Populare Categories</h2>
        <div className="row g-0">
          {categories ? (
            <Slider {...settings}>
              {categories.map((cate) => (
                <div className="box cursor-pointer" key={cate.name}>
                  <img src={cate.image} alt="" className="w-100" height={200} />
                  <h3 className=" mt-2 text-center font-sm">{cate.name}</h3>
                </div>
              ))}
            </Slider>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;
