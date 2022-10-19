import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const contactAdapter = createEntityAdapter();

export const contactSelectors = contactAdapter.getSelectors((state)=>state.contact)

const contactSlice = createSlice({
    name:"contact",
    initialState:contactAdapter.getInitialState(),
    reducers:{
        addContact:contactAdapter.addOne,
        removeContact:contactAdapter.removeOne,
        removeAllContacts:contactAdapter.removeAll
    },
})

export const {addContact,removeContact,removeAllContacts} = contactSlice.actions;
export default contactSlice.reducer;