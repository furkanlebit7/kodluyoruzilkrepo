import { createSlice } from "@reduxjs/toolkit";
import { fetchCity, fetchData } from "../Services/WeatherService";

export const WeatherSlice = createSlice({
  name: "weather",
  initialState: {
    fetchCityStatus: "idle",
    fetchDataStatus: "idle",
    theme: localStorage.getItem("theme") ? localStorage.getItem("theme") : "",
    currentData: {},
    dailyData: {},
    cityName: "Mersin",
    coord: {},
    timezone: "",
  },
  reducers: {
    changTheme: (state) => {
      state.theme = state.theme === "" ? "dark" : "";
    },
    changeLocation: (state, action) => {
      state.coord = action.payload;
      state.cityName = "Your Location";
    },
  },
  extraReducers: {
    //Fetch City
    [fetchCity.pending]: (state) => {
      state.fetchCityStatus = "loading";
    },
    [fetchCity.fulfilled]: (state, action) => {
      const { coord, cityName } = action.payload;
      state.coord = coord;
      state.cityName = cityName;
      state.fetchCityStatus = "succeeded";
    },
    [fetchCity.rejected]: (state, action) => {
      state.fetchCityStatus = "failed";
    },
    //Fetch Data
    [fetchData.pending]: (state) => {
      state.fetchDataStatus = "loading";
    },
    [fetchData.fulfilled]: (state, action) => {
      const { current, daily, timezone } = action.payload;
      state.currentData = current;
      state.dailyData = daily;
      state.timezone = timezone;
      state.fetchDataStatus = "succeeded";
    },
    [fetchData.rejected]: (state, action) => {
      state.fetchDataStatus = "failed";
    },
  },
});
export default WeatherSlice.reducer;

//Actions
export const { changTheme } = WeatherSlice.actions;
export const { changeLocation } = WeatherSlice.actions;

//Selectors
export const getDataStatus = (state) => state.weather.fetchDataStatus;
export const getCityStatus = (state) => state.weather.fetchCityStatus;
export const getCoord = (state) => state.weather.coord;
export const getCityName = (state) => state.weather.cityName;
export const getCurrentData = (state) => state.weather.currentData;
export const getTimeZone = (state) => state.weather.timezone;
export const getDailyData = (state) => state.weather.dailyData;
