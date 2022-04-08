import { createSlice } from "@reduxjs/toolkit";
import { addNoteAsync, getNotesAsync, removeNoteAsync } from "./notesServices";

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
    removeNote: {
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

    //remove note
    [removeNoteAsync.pending]: (state, action) => {
      state.removeNote.isLoading = true;
    },
    [removeNoteAsync.fulfilled]: (state, action) => {
      state.removeNote.isLoading = false;
      state.items = action.payload;
    },
    [removeNoteAsync.rejected]: (state, action) => {
      state.removeNote.isLoading = false;
      state.removeNote.error = action.error.message;
      console.log(action);
    },
  },
});

export const getNotes = (state) => state.notes.items;

export const { addNote, removeNote } = notesSlice.actions;

export default notesSlice.reducer;
