'use client'

import React, { useState } from "react";

import { FaStar } from "react-icons/fa";
const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover,setHover] = useState(null);
  return (
    <div className="flex">
        {[...Array(5)].map((star,index) => {
              const currentRating = index + 1;
              return (
                <label key={index}>
                  <input
                    type="radio"
                    name="rating"
                   
                    value={currentRating}
                    onClick={() => setRating(currentRating)}
                  />
                  <FaStar className=" star cursor-pointer  " 
                  size={40}
                  color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
    </div>
  );
};

export default StarRating;
