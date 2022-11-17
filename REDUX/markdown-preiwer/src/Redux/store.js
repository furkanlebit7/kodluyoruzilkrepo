import { configureStore } from "@reduxjs/toolkit";
import MarkdownSlice from "./MarkdownSlice";
export const store = configureStore({
  reducer: {
    markdown: MarkdownSlice,
  },
});
