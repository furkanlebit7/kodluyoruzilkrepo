import React from "react";
import { useSelector } from "react-redux";
import { getTimeZone } from "../Redux/Slices/WeatherSlice";

const Card = ({ data }) => {
  //Selectors
  const timeZone = useSelector(getTimeZone);
  //Moment
  const moment = require("moment-timezone");

  return (
    <div className="dark:bg-darkMain dark:text-white bg-white w-full mt-2 lg:w-28 2xl:w-36 py-5  h-52 rounded-2xl flex flex-col justify-between items-center drop-shadow-lg text-center">
      <p className="font-semibold">
        {moment(data.dt * 1000)
          .tz(timeZone)
          .format("dddd")
          .slice(0, 3)}
        <br />
        <span className="font-normal">
          {moment(data.dt * 1000)
            .tz(timeZone)
            .format("MMM Do YY")}
        </span>
      </p>
      <p></p>
      <img
        src={require(`../Images/icons/${data.weather[0].icon}.png`)}
        alt="weather"
        className="w-10"
      />
      <p>
        {Math.round(data.feels_like.day)}° -{" "}
        <span className="text-gray-400">
          {Math.round(data.feels_like.night)}°
        </span>
      </p>
    </div>
  );
};

export default Card;
