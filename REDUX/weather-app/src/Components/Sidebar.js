import React from "react";
import { useSelector } from "react-redux";

//Components
import Search from "./Search";

//Icons
import { CiTempHigh } from "react-icons/ci";
import { FiCloudRain } from "react-icons/fi";

//Get Data
import {
  getCityName,
  getCityStatus,
  getCurrentData,
  getDataStatus,
  getTimeZone,
} from "../Redux/Slices/WeatherSlice";
import moment from "moment/moment";

const Sidebar = () => {
  const cityStatus = useSelector(getCityStatus);
  const dataStatus = useSelector(getDataStatus);
  const currentData = useSelector(getCurrentData);
  const cityName = useSelector(getCityName);
  const timeZone = useSelector(getTimeZone);

  var moment = require("moment-timezone");
  console.log(moment().tz("America/Los_Angeles").format("LT"));
  return (
    <>
      {dataStatus === "succeeded" && (
        <div className="dark:bg-darkMain dark:text-white w-96  h-screen flex flex-col justify-between p-14 ">
          <div className="flex items-center justify-between text-lg flex-col">
            <Search />
            {cityStatus === "failed" && (
              <p className="text-red-700 underline font-semibold text-sm">
                Please Type Correct!
              </p>
            )}
          </div>
          <img
            src={require(`../Images/icons/02d.png`)}
            alt="weather"
            className="drop-shadow-lg"
          />

          <div className="drop-shadow-lg">
            <p className="text-9xl font-light">
              {Math.round(currentData.temp)}
              <span className="text-yellow-400">°</span>
            </p>
            <p className="text-2xl font-semibold my-8">
              {moment().format("dddd")}
              <span className="text-neutral-400 font-medium pl-3">
                {moment().format("LT")}
              </span>
            </p>
          </div>
          <hr />
          <div className="drop-shadow-lg">
            <div className="flex items-center text-l py-2">
              <CiTempHigh className="fill-gray-400 text-xl mr-3" />{" "}
              <p className=" font-medium">Feels Like 13°</p>
            </div>
            <div className="flex items-center text-l py-2">
              <FiCloudRain className="text-blue-400 text-xl mr-3" />{" "}
              <p className=" font-medium">Rain - 30%</p>
            </div>
          </div>
          <div className="relative drop-shadow-lg">
            <p className="absolute flex items-center justify-center  text-white font-semibold z-40 text-2xl bg-black bg-opacity-40 w-full h-full rounded-2xl">
              {cityName.includes("Province")
                ? cityName.replace(" Province", "")
                : cityName}
            </p>
            <img
              src={require("../Images/views/view.jpg")}
              alt="city"
              className="h-28 w-full object-cover rounded-2xl opacity-90"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
