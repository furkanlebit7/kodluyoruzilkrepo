import React from "react";

const Card = () => {
  return (
    <div className="dark:bg-darkMain dark:text-white bg-white w-36 py-5  h-52 rounded-2xl flex flex-col justify-between items-center drop-shadow-lg">
      <p>Mon</p>
      <img
        src={require("../Images/icons/04d.png")}
        alt="weather"
        className="w-10"
      />
      <p>
        15° <span>-3°</span>
      </p>
    </div>
  );
};

export default Card;
