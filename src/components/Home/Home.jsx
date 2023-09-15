import React from "react";
import style from "./Home.module.css";

import FeaturedProductsPage from "../FeaturedProducts/FeaturedProductsPage";
import Categories from "../Categories/Categories";
import Slider from "../Slider/Slider";
const Home = () => {
  return (
    <div className="container py-4 h-100vh">
      <Slider />
      <Categories />
      <FeaturedProductsPage />
    </div>
  );
};

export default Home;
