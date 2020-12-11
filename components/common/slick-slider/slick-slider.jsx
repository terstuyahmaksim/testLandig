import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./styles.module.scss";

export default function SlickSlider({ imgCollection }) {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.slickHolder}>
      <Slider {...settings}>
        {imgCollection.map((item) => {
          return (
            <div key={item.pathname}>
              <img
                src={item}
                alt={`STCG card number --{item}`}
                className={styles.slickImg}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
