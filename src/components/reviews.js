import React, { useState, useEffect } from "react";
import Rating from "./rating";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/testimonials")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, []);
  // use an empty dependencies array, so we only run the fetch request ONCE

  return (
    <div>
      {reviews.map((r) => (
        <>
          <fieldset id="fieldreview">
            <p className="starRating">{r.starRating}</p>
            <p className="review">{r.comment}</p>
            <p className="name">{r.name}</p>
          </fieldset>
          <fieldset id="fieldreviews">
            <p className="starRatings">{r.starRatings}</p>
            <p className="reviews">{r.comments}</p>
            <p className="names">{r.names}</p>
          </fieldset>
        </>
      ))}
    </div>
  );
}
