import React from "react";

const Highlights = () => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl dark:text-white">Today's Highlights</h2>
      <div className="grid grid-cols-[repeat(3,minmax(0,.28fr))] justify-between grid-rows-2 gap-y-16 mt-5">
        <div className="dark:bg-darkMain dark:text-white bg-white drop-shadow-lg rounded-2xl h-56 p-5">
          Highlights
        </div>
        <div className="dark:bg-darkMain dark:text-white bg-white drop-shadow-lg rounded-2xl h-56  p-5">
          Highlights
        </div>
        <div className="dark:bg-darkMain dark:text-white bg-white drop-shadow-lg rounded-2xl h-56  p-5">
          Highlights
        </div>
        <div className="dark:bg-darkMain dark:text-white bg-white drop-shadow-lg rounded-2xl h-56  p-5">
          Highlights
        </div>
        <div className="dark:bg-darkMain dark:text-white bg-white drop-shadow-lg rounded-2xl h-56 p-5">
          Highlights
        </div>
        <div className="dark:bg-darkMain dark:text-white bg-white drop-shadow-lg rounded-2xl h-56   p-5">
          Highlights
        </div>
      </div>
    </div>
  );
};

export default Highlights;
