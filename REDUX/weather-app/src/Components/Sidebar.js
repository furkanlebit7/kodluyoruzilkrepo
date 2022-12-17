import React from "react";

//Components
import Search from "./Search";

//Icons
import { MdGpsFixed } from "react-icons/md";
import { CiTempHigh } from "react-icons/ci";
import { FiCloudRain } from "react-icons/fi";
import { useSelector } from "react-redux";

//Get Data
import { getCityData } from "../Redux/Slices/WeatherSlice";

const Sidebar = () => {
  const cityData = useSelector(getCityData);
  const main = useSelector((state) => state.weather.main);
  const weather = useSelector((state) => state.weather.weather);
  const status = useSelector((state) => state.weather.status);

  return (
    <div className="dark:bg-darkMain dark:text-white w-96  h-screen flex flex-col justify-between p-14">
      <div className="flex items-center justify-between text-lg ">
        <Search />
        <div className="dark:bg-darkBg bg-bgMain rounded-full p-2 cursor-pointer">
          <MdGpsFixed />
        </div>
      </div>
      {status === "succeeded" && (
        <img
          src={require(`../Images/icons/${weather.icon}.png`)}
          alt="weather"
        />
      )}

      <div>
        <p className="text-9xl font-light">
          {Math.round(main.temp)}
          <span className="text-yellow-400">°</span>
        </p>
        <p className="text-2xl font-semibold my-8">
          Monday,{" "}
          <span className="text-neutral-400 font-medium pl-3">16:00</span>
        </p>
      </div>
      <hr />
      <div>
        <div className="flex items-center text-l py-2">
          <CiTempHigh className="fill-gray-400 text-xl mr-3" />{" "}
          <p className=" font-medium">
            Feels Like {Math.round(main.feels_like)}
          </p>
        </div>
        <div className="flex items-center text-l py-2">
          <FiCloudRain className="text-blue-400 text-xl mr-3" />{" "}
          <p className=" font-medium">Rain - 30%</p>
        </div>
      </div>
      <div className="relative ">
        <p className="absolute flex items-center justify-center  text-white font-semibold z-40 text-2xl bg-black bg-opacity-40 w-full h-full rounded-2xl">
          {cityData.name}
        </p>
        <img
          src={require("../Images/views/view.jpg")}
          alt="city"
          className="h-28 w-full object-cover rounded-2xl opacity-90"
        />
      </div>
    </div>
  );
};

export default Sidebar;
