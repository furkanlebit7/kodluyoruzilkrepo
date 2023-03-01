import React from "react";
import { useSelector } from "react-redux";

//Selectors
import { getDataStatus } from "../Redux/Slices/WeatherSlice";

//Components
import Highlights from "./Highlights";
import Weekly from "./Weekly";

const Main = () => {
  const dataStatus = useSelector(getDataStatus);

  return (
    <>
      {dataStatus === "succeeded" && (
        <div className="dark:bg-darkBg bg-bgMain h-auto min-h-screen  w-full res:w-main px-5 sm:px-12 py-12 ">
          <Weekly />
          <Highlights />
        </div>
      )}
    </>
  );
};

export default Main;
