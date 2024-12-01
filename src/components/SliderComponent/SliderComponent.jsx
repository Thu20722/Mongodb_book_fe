import { Image } from "antd";
import React from "react";
import Slider from "react-slick";

const SliderComponent = ({ arrImages }) => {
  const settings = {
    // dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Thêm thuộc tính autoplay
    autoplaySpeed: 2000, // Thay đổi tốc độ tự động lướt (2 giây)
  };

  return (
    <Slider {...settings}>
      {arrImages.map((image, index) => {
        return (
          <Image
            key={index}
            src={image}
            alt="slider"
            preview={false}
            width="100%"
            height="400px"
          />
        );
      })}
    </Slider>
  );
};

export default SliderComponent;
