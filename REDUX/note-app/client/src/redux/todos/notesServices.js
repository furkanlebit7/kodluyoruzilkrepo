import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getNotesAsync = createAsyncThunk(
  "notes/getNotesAsync",
  async () => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/notes`);
    return res.data;
  }
);
export const addNoteAsync = createAsyncThunk(
  "notes/addNotesAsync",
  async (note) => {
    const res = await axios.post(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/notes`,
      note
    );
    return res.data;
  }
);
export const removeNoteAsync = createAsyncThunk(
  "notes/removeNoteAsync",
  async (id) => {
    const res = await axios.delete(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/notes/${id}`
    );
    return res.data;
  }
);
