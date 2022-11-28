import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCountries = createAsyncThunk(
  "countries/getCountries",
  async () => {
    const {
      data: { countries },
    } = await axios.get(`${process.env.REACT_APP_COVID_API_KEY}/countries`);
    return countries;
  }
);
export const fetchDaily = createAsyncThunk("daily/getDaily", async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_COVID_API_KEY}/daily`
  );
  const modifiedData = data.map((dailyData) => ({
    confirmed: dailyData.confirmed.total,
    deaths: dailyData.deaths.total,
    date: dailyData.reportDate,
  }));
  return modifiedData;
});

export const fetchData = createAsyncThunk("data/getData", async (country) => {
  let changeableUrl = process.env.REACT_APP_COVID_API_KEY;
  if (country) {
    changeableUrl = `${process.env.REACT_APP_COVID_API_KEY}/countries/${country}`;
  }

  const {
    data: { confirmed, recovered, deaths, lastUpdate },
  } = await axios.get(changeableUrl);

  return {
    confirmed,
    recovered,
    deaths,
    lastUpdate,
    country,
  };
});
