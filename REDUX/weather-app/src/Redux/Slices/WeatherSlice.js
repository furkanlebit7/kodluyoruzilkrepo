import { createSlice } from "@reduxjs/toolkit";
import { fetchCity } from "../Services/WeatherService";

export const WeatherSlice = createSlice({
  name: "weather",
  initialState: {},
  reducers: {
    changTheme: (state) => {
      state.theme = state.theme === "" ? "dark" : "";
    },
  },
  extraReducers: {},
});
export default WeatherSlice.reducer;

export const { changTheme } = WeatherSlice.actions;

// export const getCityData = (state) => state.weather.cityData;
