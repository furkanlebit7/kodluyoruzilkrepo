import { configureStore } from "@reduxjs/toolkit";
import textSlice from "./TextSlice";
export const store = configureStore({
  reducer: {
    text: textSlice,
  },
});
