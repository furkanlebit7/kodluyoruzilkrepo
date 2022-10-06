import { configureStore } from "@reduxjs/toolkit";
import bankSlice from "./bank/bankSlice";

export const store = configureStore({
  reducer: {
    bank: bankSlice,
  },
});
