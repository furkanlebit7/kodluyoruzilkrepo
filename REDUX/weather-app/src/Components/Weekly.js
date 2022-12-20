import React from "react";
import { useSelector } from "react-redux";
import { getDailyData } from "../Redux/Slices/WeatherSlice";
import Card from "./Card";
import Header from "./Header";

const Weekly = () => {
  const dailyData = useSelector(getDailyData);

  return (
    <div>
      <Header />
      <div className="flex items-center lg:flex-row flex-col justify-between w-full mt-5 flex-wrap">
        {dailyData.slice(1).map((data, i) => (
          <Card key={i} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Weekly;
