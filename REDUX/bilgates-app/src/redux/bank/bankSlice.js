import { createSlice } from "@reduxjs/toolkit";
import items from "../../items"
export const bankSlice = createSlice({
    name:"bank",
    initialState: {
        totalMoney:100000000000,
        money:100000000000,
        cart:items
    },
    reducers:{
        managaCart:(state,action) => {
            const {item,piece} = action.payload;
            const findItem = state.cart.find((fI) => fI.id===item.id)
            findItem.count = piece;

            let total = 0;
            state.cart.forEach((cr) =>{
                total+=cr.count*cr.price;
            })
            state.money = state.totalMoney - total;
        }
    }
})

export const { managaCart } = bankSlice.actions;
export default bankSlice.reducer;