import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCity = createAsyncThunk("weather/getCity", async (city) => {
  const {
    data: { coord },
    data: { name: cityName },
  } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
  );

  return { coord, cityName };
});

export const fetchData = createAsyncThunk("weather/getData", async (coord) => {
  const {
    data: { current },
    data: { daily },
    data: { timezone },
  } = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=minutely,hourly,alerts&units=metric&appid=${process.env.REACT_APP_API_KEY}`
  );
  return { current, daily, timezone };
});
