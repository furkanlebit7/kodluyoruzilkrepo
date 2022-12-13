import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCity = createAsyncThunk("city/getCity", async (city) => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
  );
  return data;
});
