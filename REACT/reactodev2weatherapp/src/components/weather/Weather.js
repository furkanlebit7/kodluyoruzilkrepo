import { useEffect, useState } from "react";
import "./weather.css";

import axios from "axios";
import getDayName from "../../data/Days";
import WeatherIcons from "./WeatherIcons";

function Weather({ currentCity }) {
  const [weathers, setWeathers] = useState();
  const key = "eeaf063d086b4c9222dcaa0155c5fd8b";
  const date = new Date();
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast/daily?q=${currentCity}&cnt=7&units=metric&appid=${key}`
      )
      .then((res) => setWeathers(res.data));
  }, [currentCity]);
  return (
    <div className="cards">
      {weathers &&
        weathers.list.map((w, i) => (
          <div className={i === 0 ? "card active" : "card"}>
            <div className="card-header">
              <p>{getDayName(date.getDay() + i)}</p>
              <p>
                {Math.floor(w.temp.min)}°C / {Math.ceil(w.temp.max)}°C
              </p>
            </div>
            <div className="card-body">
              <WeatherIcons icon={w.weather[0].icon} />
            </div>
            <div className="card-footer">{w.weather[0].description}</div>
          </div>
        ))}
    </div>
  );
}

export default Weather;
