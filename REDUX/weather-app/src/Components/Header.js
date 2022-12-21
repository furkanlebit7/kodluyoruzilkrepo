import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changTheme } from "../Redux/Slices/WeatherSlice";

import { BsSun, BsFillMoonStarsFill, BsGithub } from "react-icons/bs";

const Header = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.weather.theme);

  useEffect(() => {
    theme
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");

    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = () => {
    dispatch(changTheme(theme ? "" : "dark"));
  };

  return (
    <div className="flex items-center justify-between dark:text-white text-darkMain">
      <h1 className="text-2xl">Weekly</h1>
      <div className="flex items-center justify-center text-2xl">
        <button className="  p-2 rounded-full" onClick={() => handleTheme()}>
          {theme ? <BsSun /> : <BsFillMoonStarsFill />}
        </button>
        <a
          href="https://github.com/furkanlebit7/kodluyoruzilkrepo/tree/main/REDUX/weather-app"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub className="ml-5" />
        </a>
      </div>
    </div>
  );
};

export default Header;
