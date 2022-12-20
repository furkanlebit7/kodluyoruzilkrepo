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
      <div className="grid md:grid-cols-[repeat(3,minmax(0,.28fr))] grid-cols-[repeat(2,minmax(0,.45fr))] justify-between grid-rows-3 md:grid-rows-2 gap-y-8 mt-4">
        <div className="dark:bg-darkMain dark:text-white bg-white drop-shadow-lg rounded-2xl h-56 p-5 flex flex-col items-start justify-between">
          <p className="text-gray-500 text-lg sm:text-2xl">UV Index</p>
          <p className="font-semibold text-3xl sm:text-5xl flex">
            {currentData.uvi}
          </p>
          <p className="font-semibold text-3xl text-orange-600">
            <GiSunflower />
          </p>
        </div>
        <div className="dark:bg-darkMain dark:text-white bg-white drop-shadow-lg rounded-2xl h-56 p-5 flex flex-col items-start justify-between">
          <p className="text-gray-500 text-lg sm:text-2xl">Wind Status</p>
          <p className="font-semibold text-3xl sm:text-5xl  flex">
            {currentData.wind_speed}
            <span className="text-sm sm:text-xl">km/H</span>
          </p>
          <p className="font-semibold text-3xl text-orange-600">
            <GiWindsock />
          </p>
        </div>
        <div className="dark:bg-darkMain dark:text-white bg-white drop-shadow-lg rounded-2xl h-56 p-5 flex flex-col items-start justify-between">
          <p className="text-gray-500 text-lg sm:text-2xl">Sunrise & Sunset</p>
          <div className="font-semibold text-3xl my-auto">
            <div className="flex items-start justify-center">
              <WiSunrise className="text-orange-500" />
              <p className="text-lg sm:text-2xl">
                {moment(currentData.sunrise * 1000)
                  .tz(timeZone)
                  .format("LT")}
              </p>
            </div>
            <div className="flex items-start justify-center mt-3">
              <WiSunset className="text-orange-600 " />
              <p className="text-lg sm:text-2xl">
                {moment(currentData.sunset * 1000)
                  .tz(timeZone)
                  .format("LT")}
              </p>
            </div>
          </div>
        </div>
        <div className="dark:bg-darkMain dark:text-white bg-white drop-shadow-lg rounded-2xl h-56 p-5 flex flex-col items-start justify-between">
          <p className="text-gray-500 text-lg sm:text-2xl">Humidity</p>
          <p className="font-semibold text-3xl sm:text-5xl flex">
            {currentData.humidity}
            <span className="text-sm sm:text-xl">%</span>
          </p>
          <p className="font-semibold text-3xl text-orange-600">
            <WiHumidity />
          </p>
        </div>
        <div className="dark:bg-darkMain dark:text-white bg-white drop-shadow-lg rounded-2xl h-56 p-5 flex flex-col items-start justify-between">
          <p className="text-gray-500 text-lg sm:text-2xl">Visibility</p>
          <p className="font-semibold text-3xl sm:text-5xl flex">
            {currentData.visibility}
            <span className="text-sm sm:text-xl">km</span>
          </p>
          <p className="font-semibold text-3xl text-orange-600">
            <MdVisibility />
          </p>
        </div>
        <div className="dark:bg-darkMain dark:text-white bg-white drop-shadow-lg rounded-2xl h-56 p-5 flex flex-col items-start justify-between">
          <p className="text-gray-500 text-lg sm:text-2xl">Pressure</p>
          <p className="font-semibold text-3xl sm:text-5xl flex">
            {currentData.pressure}
            <span className="text-sm sm:text-xl">mbar</span>
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
