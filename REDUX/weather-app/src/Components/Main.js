import React from "react";
import { useSelector } from "react-redux";
import { getDataStatus } from "../Redux/Slices/WeatherSlice";
import Header from "./Header";
import Highlights from "./Highlights";
import Weekly from "./Weekly";

const Main = () => {
  const dataStatus = useSelector(getDataStatus);

  return (
    <>
      {dataStatus === "succeeded" && (
        <div className="dark:bg-darkBg bg-bgMain h-screen w-main px-12 py-12">
          <Header />
          <Weekly />
          <Highlights />
        </div>
      )}
    </>
  );
};

export default Main;
