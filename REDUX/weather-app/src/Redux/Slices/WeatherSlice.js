import { createSlice } from "@reduxjs/toolkit";
import { fetchCity } from "../Services/WeatherService";

export const WeatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: "",
    status: "idle",
  },
  reducers: {},
  extraReducers: {
    [fetchCity.pending]: (state, action) => {
      state.status = "loading";
      console.log("pendind");
    },
    [fetchCity.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    },
  },
});
export default WeatherSlice.reducer;
