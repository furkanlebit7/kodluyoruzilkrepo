import React from "react";

//Components
import Search from "./Search";

//Icons
import { MdGpsFixed } from "react-icons/md";
import { AiOutlineCloud } from "react-icons/ai";
import { FiCloudRain } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="w-96  h-screen flex flex-col justify-between p-14 ">
      <div className="flex items-center justify-between text-lg ">
        <Search />
        <div className="p-2 bg-slate-100 rounded-full">
          <MdGpsFixed />
        </div>
      </div>

      <img src={require("../Images/17.png")} alt="weather" />

      <div>
        <p className="text-9xl font-light">
          12<span className="text-yellow-400">°</span>
        </p>
        <p className="text-2xl font-semibold my-8">
          Monday,{" "}
          <span className="text-neutral-400 font-medium pl-3">16:00</span>
        </p>
      </div>
      <hr />
      <div>
        <div className="flex items-center text-l py-2">
          <AiOutlineCloud className="fill-gray-400 text-xl mr-3" />{" "}
          <p className=" font-medium">Mostly Cloudy</p>
        </div>
        <div className="flex items-center text-l py-2">
          <FiCloudRain className="text-blue-400 text-xl mr-3" />{" "}
          <p className=" font-medium">Rain - 30%</p>
        </div>
      </div>
      <div className="relative ">
        <p className="absolute flex items-center justify-center  text-white font-semibold z-40 text-2xl bg-black bg-opacity-40 w-full h-full rounded-2xl">
          New York, NY, USA{" "}
        </p>
        <img
          src={require("../Images/view.jpg")}
          alt="city"
          className="h-28 w-full object-cover rounded-2xl opacity-90"
        />
      </div>
    </div>
  );
};

export default Sidebar;
