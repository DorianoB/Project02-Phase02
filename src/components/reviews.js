import React, { useState, useEffect } from "react";

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
          <p>{r.starRating}</p>
          <p>{r.comment}</p>
          <p>{r.name}</p>
        </>
      ))}
    </div>
  );
}
