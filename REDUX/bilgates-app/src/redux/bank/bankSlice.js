import { createSlice } from "@reduxjs/toolkit";

export const bankSlice = createSlice({
    name:"bank",
    initialState: {
        money:100000000000
    },
    reducers:{
        buy:(state, action) =>{
            state.money-=action.payload
        },
        sell:(state, action) =>{
            state.money+=action.payload
        }
    }
})

export const { sell, buy } = bankSlice.actions;
export default bankSlice.reducer;