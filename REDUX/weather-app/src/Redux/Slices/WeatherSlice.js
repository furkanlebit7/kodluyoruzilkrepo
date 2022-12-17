import { createSlice } from "@reduxjs/toolkit";
import { fetchCity, fetchData } from "../Services/WeatherService";

export const WeatherSlice = createSlice({
  name: "weather",
  initialState: {
    fetchCityStatus: "idle",
    fetchDataStatus: "idle",
    theme: "",
    currentData: {},
    dailyData: {},
    cityName: "Mersin",
    coord: {},
  },
  reducers: {
    changTheme: (state) => {
      state.theme = state.theme === "" ? "dark" : "";
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
      const { current, daily } = action.payload;
      state.currentData = current;
      state.dailyData = daily;
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

//Selectors
export const getDataStatus = (state) => state.weather.fetchDataStatus;
export const getCityStatus = (state) => state.weather.fetchCityStatus;
export const getCoord = (state) => state.weather.coord;
export const getCityName = (state) => state.weather.cityName;
export const getCurrentData = (state) => state.weather.currentData;
