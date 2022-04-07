import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getNotesAsync = createAsyncThunk(
  "notes/getNotesAsync",
  async () => {
    const res = await axios("http://localhost:7000/notes");
    return res.data;
  }
);
export const addNoteAsync = createAsyncThunk(
  "notes/addNotesAsync",
  async (note) => {
    const res = await axios.post("http://localhost:7000/notes", note);
    return res.data;
  }
);

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [],
    getNotes: {
      isLoading: false,
      error: null,
    },
    addNote: {
      isLoading: false,
      error: null,
    },
  },
  reducers: {
    removeNote: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },
  },
  extraReducers: {
    //get notes
    [getNotesAsync.pending]: (state, action) => {
      state.getNotes.isLoading = true;
    },
    [getNotesAsync.fulfilled]: (state, action) => {
      state.getNotes.isLoading = false;
      state.items = action.payload;
    },
    [getNotesAsync.rejected]: (state, action) => {
      state.getNotes.isLoading = false;
      state.getNotes.error = action.error.message;
    },

    //add note
    [addNoteAsync.pending]: (state, action) => {
      state.addNote.isLoading = true;
    },
    [addNoteAsync.fulfilled]: (state, action) => {
      state.addNote.isLoading = false;
      state.items.push(action.payload);
    },
    [addNoteAsync.rejected]: (state, action) => {
      state.addNote.isLoading = false;
      state.addNote.error = action.error.message;
    },
  },
});

export const getNotes = (state) => state.notes.items;

export const { addNote, removeNote } = notesSlice.actions;

export default notesSlice.reducer;
