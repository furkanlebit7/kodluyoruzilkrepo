import { createSlice } from "@reduxjs/toolkit";
import { fetchText } from "./services/textService";

export const TextSlice = createSlice({
  name: "text",
  initialState: {
    text: "",
    status: "idle",
  },
  reducers: {},
  extraReducers: {
    [fetchText.pending]: (state) => {
      state.status = "loading";
    },
    [fetchText.fulfilled]: (state, action) => {
      state.status = "success";
      state.text = action.payload;
    },
    [fetchText.rejected]: (state) => {
      state.status = "error";
    },
  },
});

export default TextSlice.reducer;
