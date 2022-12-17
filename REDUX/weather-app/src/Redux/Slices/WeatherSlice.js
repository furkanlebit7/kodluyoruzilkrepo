import { createSlice } from "@reduxjs/toolkit";
import { fetchCity } from "../Services/WeatherService";

export const WeatherSlice = createSlice({
  name: "weather",
  initialState: {
    cityData: [],
    weeklyData: [],
    status: "idle",
    main: [],
    error: "",
    theme: "",
    weather: [],
  },
  reducers: {
    changTheme: (state) => {
      state.theme = state.theme === "" ? "dark" : "";
    },
  },
  extraReducers: {
    [fetchCity.pending]: (state) => {
      state.status = "loading";
    },
    [fetchCity.fulfilled]: (state, action) => {
      const { cityData, weeklyData, main, weather } = action.payload;
      state.cityData = cityData;
      state.weeklyData = weeklyData;
      state.main = main;
      state.weather = weather;
      state.status = "succeeded";
    },
    [fetchCity.rejected]: (state, action) => {
      state.error = action.payload;
      state.status = "error";
    },
  },
});
export default WeatherSlice.reducer;
export const { changTheme } = WeatherSlice.actions;

export const getCityData = (state) => state.weather.cityData;
