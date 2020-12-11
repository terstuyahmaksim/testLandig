import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './styles.module.css';

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: " #1d1d1d" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "#1d1d1d" }}
//       onClick={onClick}
//     />
//   );
// }

export default function SlickSlider({ imgCollection }) {

  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
  };
  return (
    <div className={styles.holder}>
      <Slider {...settings}>
        {imgCollection.map((item) => {
          return <div key={item.pathname}>
            <img src={item} alt={`STCG card number ${item}`} className="logo" />
          </div>
        })}
      </Slider>
    </div>
  );
}

