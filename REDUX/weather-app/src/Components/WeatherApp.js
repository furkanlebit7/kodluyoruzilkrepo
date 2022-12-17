import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import Sidebar from "./Sidebar";
import Main from "./Main";
import Error from "./Error";

//Fetch
import { fetchCity } from "../Redux/Services/WeatherService";

const WeatherApp = () => {
  const dispatch = useDispatch();

  const status = useSelector((state) => state.weather.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCity("istanbul"));
    }
  }, [dispatch, status]);

  if (status === "loading") return <div>Loading...</div>;

  if (status === "error") return <Error />;

  return (
    <div className="flex">
      <Sidebar />
      <Main />
    </div>
  );
};

export default WeatherApp;
