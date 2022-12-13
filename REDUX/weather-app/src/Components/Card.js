import React from "react";

const Card = () => {
  return (
    <div className="bg-white md:w-15 xl:w-40 py-5 px-10 h-40 rounded-2xl flex flex-col justify-between items-center">
      <p>Mon</p>
      <img src={require("../Images/17.png")} alt="weather" className="w-10" />
      <p>
        15° <span>-3°</span>
      </p>
    </div>
  );
};

export default Card;
