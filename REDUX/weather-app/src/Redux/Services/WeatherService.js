import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCity = createAsyncThunk("data/getData", async (city) => {
  const {
    data: cityData,
    data: { main },
    data: { weather },
    data: {
      coord: { lat, lon },
    },
  } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
  );

  const { data: weeklyData } = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${process.env.REACT_APP_API_KEY}`
  );

  return { cityData, weeklyData, main, weather: weather[0] };
});
