import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import Sidebar from "./Sidebar";
import Main from "./Main";
import Error from "./Error";
import Loading from "./Loading";

//Fetch
import { fetchData } from "../Redux/Services/WeatherService";
import { getDataStatus } from "../Redux/Slices/WeatherSlice";

const WeatherApp = () => {
  //Conts
  const coord = { lon: "34.6509", lat: "36.862" };
  //Selectors
  const dataStatus = useSelector(getDataStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    if (dataStatus === "idle") {
      dispatch(fetchData(coord));
    }
  }, [dispatch]);

  if (dataStatus === "loading") return <Loading />;
  if (dataStatus === "failed") return <Error />;

  return (
    <div className="flex">
      <Sidebar />
      <Main />
    </div>
  );
};

export default WeatherApp;
