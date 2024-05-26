"use client";
import React, { useState } from "react";
import { LuThumbsUp } from "react-icons/lu";
import { LuThumbsDown } from "react-icons/lu";
import StarRating from "./StarRating";

const Page = () => {
  const [recommend, setRecommend] = useState(null); // null means no selection, true for yes, false for no

  const handleRecommend = (value) => {
    setRecommend(value);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border border-lime-100 w-[300px] h-[400px] bg-white rounded-md text-black p-4">
        <h2 className="font-bold text-2xl mb-4">Leave a review</h2>
        {/* Safety */}
        <div>
          <h4 className="my-2">Safety</h4>
          <div className="flex items-center">
            <StarRating />
          </div>
        </div>

        {/* Communications */}
        <div>
          <h4 className="my-2 ">Communications</h4>
          <div className="flex items-center">
            <StarRating />
          </div>
        </div>

        {/* yes or no  */}
        <div>
          <h3 className=" my-3  ">Would you recommend Trausti?</h3>
          <div className="flex gap-10">
            {/* Thumbs up */}
            <div
              className={`flex items-center gap-3 cursor-pointer ${
                recommend === true ? "text-green-500" : ""
              }`}
              onClick={() => handleRecommend(true)}
            >
              <LuThumbsUp /> Yes
            </div>
            {/* Thumbs down */}
            <div
              className={`flex items-center gap-3 cursor-pointer ${
                recommend === false ? "text-green-500" : ""
              }`}
              onClick={() => handleRecommend(false)}
            >
              <LuThumbsDown /> No
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
