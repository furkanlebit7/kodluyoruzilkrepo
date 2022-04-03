import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    IncrementByAmount: (state, action) => {
      state.value += Number(action.payload);
      console.log(action);
    },
  },
});

export const { increment, IncrementByAmount, decrement } = counterSlice.actions;
export default counterSlice.reducer;
