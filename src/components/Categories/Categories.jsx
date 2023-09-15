import React, { useEffect, useState } from "react";
import style from "./Categories.module.css";
import axios from "axios";

const Categories = () => {
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
    <div className="categories py-4 mb-5 mt-5 bg-main-light px-4">
      <h2 className="mb-3">Shop Populare Categories</h2>
      <div className="row g-0">
        {categories.map((cate) => (
          <div className="col">
            <div className="box cursor-pointer">
              <img
                src={cate.image}
                alt={cate.name}
                className="w-100 mb-2"
                height={150}
              />
              <h3 className="font-sm fw-bolder">{cate.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
