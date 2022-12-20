import React from "react";

//Selectors
import { getCurrentData, getTimeZone } from "../Redux/Slices/WeatherSlice";

//Icons
import { GiSunflower, GiWindsock } from "react-icons/gi";
import { WiSunset, WiSunrise, WiHumidity, WiEarthquake } from "react-icons/wi";
import { MdVisibility } from "react-icons/md";
import { useSelector } from "react-redux";

const Highlights = () => {
  //Selectors
  const currentData = useSelector(getCurrentData);
  const timeZone = useSelector(getTimeZone);
  //Moment
  const moment = require("moment-timezone");
  return (
    <div className="mt-6">
      <h2 className="text-2xl dark:text-white">Today's Highlights</h2>
      <div className="grid grid-cols-[repeat(3,minmax(0,.28fr))] justify-between grid-rows-2 gap-y-16 mt-5">
        <div className="dark:bg-darkMain dark:text-white bg-white drop-shadow-lg rounded-2xl h-56 p-5 flex flex-col items-start justify-between">
          <p className="text-gray-500 text-2xl">UV Index</p>
          <p className="font-semibold text-5xl flex">{currentData.uvi}</p>
          <p className="font-semibold text-3xl text-orange-600">
            <GiSunflower />
          </p>
        </div>
        <div className="dark:bg-darkMain dark:text-white bg-white drop-shadow-lg rounded-2xl h-56 p-5 flex flex-col items-start justify-between">
          <p className="text-gray-500 text-2xl">Wind Status</p>
          <p className="font-semibold text-5xl flex">
            {currentData.wind_speed}
            <span className="text-xl">km/H</span>
          </p>
          <p className="font-semibold text-3xl text-orange-600">
            <GiWindsock />
          </p>
        </div>
        <div className="dark:bg-darkMain dark:text-white bg-white drop-shadow-lg rounded-2xl h-56 p-5 flex flex-col items-start justify-between">
          <p className="text-gray-500 text-2xl">Sunrise & Sunset</p>
          <div className="font-semibold text-4xl my-auto">
            <p className="flex items-start justify-center">
              <WiSunrise className="text-orange-500" />
              <span className="text-3xl">
                {moment(currentData.sunrise * 1000)
                  .tz(timeZone)
                  .format("LT")}
              </span>
            </p>
            <p className="flex items-start justify-center mt-3">
              <WiSunset className="text-orange-600 " />
              <span className="text-3xl">
                {" "}
                {moment(currentData.sunset * 1000)
                  .tz(timeZone)
                  .format("LT")}
              </span>
            </p>
          </div>
        </div>
        <div className="dark:bg-darkMain dark:text-white bg-white drop-shadow-lg rounded-2xl h-56 p-5 flex flex-col items-start justify-between">
          <p className="text-gray-500 text-2xl">Humidity</p>
          <p className="font-semibold text-5xl flex">
            12<span className="text-xl">%</span>
          </p>
          <p className="font-semibold text-3xl text-orange-600">
            <WiHumidity />
          </p>
        </div>
        <div className="dark:bg-darkMain dark:text-white bg-white drop-shadow-lg rounded-2xl h-56 p-5 flex flex-col items-start justify-between">
          <p className="text-gray-500 text-2xl">Visibility</p>
          <p className="font-semibold text-5xl flex">
            12<span className="text-xl">%</span>
          </p>
          <p className="font-semibold text-3xl text-orange-600">
            <MdVisibility />
          </p>
        </div>
        <div className="dark:bg-darkMain dark:text-white bg-white drop-shadow-lg rounded-2xl h-56 p-5 flex flex-col items-start justify-between">
          <p className="text-gray-500 text-2xl">Air Quality</p>
          <p className="font-semibold text-5xl flex">
            12<span className="text-xl">%</span>
          </p>
          <p className="font-semibold text-3xl text-orange-600">
            <WiEarthquake />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
