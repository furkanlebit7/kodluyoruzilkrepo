import { configureStore } from "@reduxjs/toolkit";
import WeatherSlice from "./Slices/WeatherSlice";

export const store = configureStore({
  reducer: {
    weather: WeatherSlice,
  },
});
