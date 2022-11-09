import { createSlice } from "@reduxjs/toolkit";
import { duplicatedFrameworks, shuffle } from "../Data/data";

export const CardSlice = createSlice({
  name: "cards",
  initialState: {
    cards: shuffle(duplicatedFrameworks),
    comparedState: [],
    isFinished: false,
    point: 200,
    status: "",
  },
  reducers: {
    open: (state, action) => {
      const card = action.payload;
      const findItem = state.cards.find((c) => c.id === card.id);
      findItem.isOpen = true;
    },
    close: (state, action) => {
      const card = action.payload;
      const findItem = state.cards.find((c) => c.id === card.id);
      findItem.isOpen = false;
    },
    match: (state, action) => {
      const comparedCards = action.payload;
      comparedCards.forEach((card) => {
        state.cards.map((c) => {
          if (c.id === card.id) {
            c.isOpen = true;
            c.isCompleted = true;
          }
        });
        state.comparedState.push(card.id);
      });
      if (state.comparedState.length === state.cards.length) {
        state.isFinished = true;
        state.status = "win";
      }
      state.point += 50;
    },
    unCorrect: (state) => {
      state.point -= 10;
      if (state.point === 0) {
        state.status = "lose";
        state.isFinished = true;
      }
    },
    restart: (state) => {
      state.comparedState = [];
      state.isFinished = false;
      state.point = 200;
      state.status = "";
      state.cards = shuffle(duplicatedFrameworks);
    },
  },
});

export const { open, match, close, unCorrect, restart } = CardSlice.actions;

export default CardSlice.reducer;
