import React from "react";

//Components
import Search from "./Search";

//Icons
import { CiTempHigh } from "react-icons/ci";
import { FiCloudRain } from "react-icons/fi";

//Get Data
import { getCityData } from "../Redux/Slices/WeatherSlice";

const Sidebar = () => {
  return (
    <div className="dark:bg-darkMain dark:text-white w-96  h-screen flex flex-col justify-between p-14 drop-shadow-lg">
      <div className="flex items-center justify-between text-lg ">
        <Search />
      </div>
      <img src={require(`../Images/icons/02d.png`)} alt="weather" />

      <div>
        <p className="text-9xl font-light">
          16
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
          <p className=" font-medium">Feels Like 13°</p>
        </div>
        <div className="flex items-center text-l py-2">
          <FiCloudRain className="text-blue-400 text-xl mr-3" />{" "}
          <p className=" font-medium">Rain - 30%</p>
        </div>
      </div>
      <div className="relative ">
        <p className="absolute flex items-center justify-center  text-white font-semibold z-40 text-2xl bg-black bg-opacity-40 w-full h-full rounded-2xl">
          İstanbul
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
