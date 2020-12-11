// import styles from "./styles.module.scss";

// const Star = ({ marked, starId }) => {
//   return (
//     <span data-star-id={starId} className={styles.star} role="button">
//       {marked ? "\u2605" : "\u2606"}
//     </span>
//   );
// };

// const StarRating = ({ value }) => {
//   const [rating, setRating] = React.useState(parseInt(value) || 0);
//   const [selection, setSelection] = React.useState(0);

//   const hoverOver = (event) => {
//     let val = 0;
//     if (event && event.target && event.target.getAttribute("data-star-id"))
//       val = event.target.getAttribute("data-star-id");
//     setSelection(val);
//   };
//   return (
//     <div
//       onMouseOut={() => hoverOver(null)}
//       onClick={(e) =>
//         setRating(e.target.getAttribute("data-star-id") || rating)
//       }
//       onMouseOver={hoverOver}
//     >
//       {Array.from({ length: 5 }, (v, i) => (
//         <Star
//           starId={i + 1}
//           key={`star_--{i + 1}`}
//           marked={selection ? selection >= i + 1 : rating >= i + 1}
//         />
//       ))}
//     </div>
//   );
// };

// export default StarRating;

import React from "react";
import ReactStars from "react-rating-stars-component";

const secondExample = {
  size: 17,
  count: 5,
  color: "red",
  activeColor: "#fec600",
  value: 4.5,
  a11y: true,
  isHalf: true,
  emptyIcon: <i className="far fa-star" />,
  halfIcon: <i className="fa fa-star-half-alt" />,
  filledIcon: <i className="fa fa-star" />,
  onChange: (newValue) => {
    console.log(`Example 2: new value is ${newValue}`);
  },
};

export default function StarRating() {
  return (
    <div className="App">
      <ReactStars {...secondExample} />
    </div>
  );
}
