import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCountries,
  fetchDaily,
  fetchData,
} from "../Services/CovidService";

export const CountriesSlice = createSlice({
  name: "covid",
  initialState: {
    countries: {
      countries: [],
      status: "idle",
    },
    daily: {
      daily: [],
      status: "idle",
    },
    data: {
      data: [],
      status: "idle",
    },
  },
  reducers: {},
  extraReducers: {
    // Get Countries
    [fetchCountries.pending]: (state) => {
      state.countries.status = "loading";
    },
    [fetchCountries.fulfilled]: (state, action) => {
      state.countries.status = "success";
      state.countries.countries = action.payload;
    },
    [fetchCountries.rejected]: (state) => {
      state.countries.status = "error";
    },

    // Get Daily Data
    [fetchDaily.pending]: (state) => {
      state.daily.status = "loading";
    },
    [fetchDaily.fulfilled]: (state, action) => {
      state.daily.status = "success";
      state.daily.daily = action.payload;
    },
    [fetchDaily.rejected]: (state) => {
      state.daily.status = "error";
    },

    // Get Daily Data
    [fetchData.pending]: (state) => {
      state.data.status = "loading";
    },
    [fetchData.fulfilled]: (state, action) => {
      state.data.status = "success";
      state.data.data = action.payload;
    },
    [fetchData.rejected]: (state) => {
      state.data.status = "error";
    },
  },
});

export default CountriesSlice.reducer;
