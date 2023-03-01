import React from "react";
import { useSelector } from "react-redux";

//Components
import Search from "./Search";

//Icons
import { CiTempHigh } from "react-icons/ci";
import { FiWind } from "react-icons/fi";

//Get Data
import {
  getCityName,
  getCityStatus,
  getCurrentData,
  getDataStatus,
  getTimeZone,
} from "../Redux/Slices/WeatherSlice";

const Sidebar = () => {
  //Selectors
  const cityStatus = useSelector(getCityStatus);
  const dataStatus = useSelector(getDataStatus);
  const currentData = useSelector(getCurrentData);
  const cityName = useSelector(getCityName);
  const timeZone = useSelector(getTimeZone);

  //Moment
  const moment = require("moment-timezone");
  return (
    <>
      {dataStatus === "succeeded" && (
        <div className="dark:bg-darkMain dark:text-white res:w-96 w-full h-auto min-h-screen  flex flex-col justify-between p-14 items-center res:items-start">
          <div className="flex items-center justify-between text-lg flex-col">
            <Search />
            {cityStatus === "failed" && (
              <p className="text-red-700 underline font-semibold text-sm">
                Please Type Correct!
              </p>
            )}
          </div>
          <img
            src={require(`../Images/icons/${currentData.weather[0].icon}.png`)}
            alt="weather"
            className="drop-shadow-lg res:w-full w-40 my-10 res:my-2"
          />

          <div className="drop-shadow-lg text-center res:text-start">
            <p className="text-9xl font-light">
              {Math.round(currentData.temp)}
              <span className="text-yellow-400">°</span>
            </p>
            <p className="text-2xl font-semibold my-8">
              {moment().tz(timeZone).format("dddd")}
              <span className="text-neutral-400 font-medium pl-3">
                {moment().tz(timeZone).format("LT")}
              </span>
            </p>
          </div>
          <hr />
          <div className="drop-shadow-lg">
            <div className="flex items-center text-l py-2">
              <CiTempHigh className="text-blue-400 text-xl mr-3" />{" "}
              <p className=" font-medium">
                Feels Like {Math.round(currentData.feels_like)}°
              </p>
            </div>
            <div className="flex items-center text-l py-2">
              <FiWind className="text-blue-400 text-xl mr-3" />{" "}
              <p className=" font-medium">
                Wind Speed - {currentData.wind_speed}
              </p>
            </div>
          </div>
          <div className="relative drop-shadow-lg">
            <p className="absolute flex items-center justify-center  text-white font-semibold z-40 text-2xl bg-black bg-opacity-40 w-full h-full rounded-2xl">
              {cityName.includes("Province")
                ? cityName.replace(" Province", "")
                : cityName}
            </p>
            <img
              src={require(`../Images/views/view${Math.floor(
                Math.random() * 10 + 1
              )}.jpg`)}
              alt="city"
              className="h-28 w-64  object-cover rounded-2xl opacity-90"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
