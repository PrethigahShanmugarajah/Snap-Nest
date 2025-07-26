import React from "react";

const StarRating = ({ rating = 4 }) => {
  return (
    <>
      {Array(5)
        .fill("")
        .map((_, index) => (
          <i
            key={index}
            className={`text-yellow-500 ${
              rating > index ? "bi bi-star-fill" : "bi bi-star"
            }`}
          ></i>
        ))}
    </>
  );
};

export default StarRating;
