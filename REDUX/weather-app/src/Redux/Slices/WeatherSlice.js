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
  },
  reducers: {},
  extraReducers: {
    [fetchCity.pending]: (state) => {
      state.status = "loading";
    },
    [fetchCity.fulfilled]: (state, action) => {
      const { cityData, weeklyData, main } = action.payload;
      console.log(cityData, weeklyData, main);
      state.status = "succeeded";
      state.cityData = cityData;
      state.weeklyData = weeklyData;
      state.main = main;
    },
    [fetchCity.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
  },
});
export default WeatherSlice.reducer;

export const getCityData = (state) => state.weather.cityData;
