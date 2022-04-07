import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "./todos/notesSlice";

export const store = configureStore({
  reducer: {
    notes: notesSlice,
  },
});
