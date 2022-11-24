import { configureStore } from "@reduxjs/toolkit";
import CountriesSlice from "./Slice/CovidSlice";
export const store = configureStore({
  reducer: {
    covid: CountriesSlice,
  },
});
