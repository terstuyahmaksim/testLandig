import ReactStars from "react-rating-stars-component";

const StarRating = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className="App">
      <ReactStars
        count={5}
        value={4}
        isHalf={true}
        onChange={ratingChanged}
        size={17}
        activeColor="#fec600"
      />
    </div>
  );
};

export default StarRating;
