import React from "react";
import style from "./Slider.module.css";
import Carousel from "nuka-carousel";
import image1 from "../../Assets/images/slider-image-1.jpeg";
import image2 from "../../Assets/images/slider-image-2.jpeg";
import image3 from "../../Assets/images/slider-image-3.jpeg";
import banner from "../../Assets/images/assortment-citrus-fruits.png";

const Slider = () => {
  const options = {
    autoplay: true,
    autoplayInterval: 4000,

    speed: 2000,
    withoutControls: true,
    wrapAround: true,
    pauseOnHover: true,
  };
  return (
    <div className="row">
      <div className="col-xl-8">
        <Carousel {...options} style={{ height: "300px" }}>
          <img src={image1} alt="" className="w-100 h-50" />
          <img src={image2} alt="" className="w-100 h-50" />
          <img src={image3} alt="" className="w-100 h-50" />
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
