
import { createSlice } from "@reduxjs/toolkit";

import { BookInterface } from "../components/Popular";

const initialState: BookInterface[] = []

export const bookSlice = createSlice({
    name: 'allbooks',
    initialState: { value: initialState },
    reducers: {
        getAllBooks: ((state, action) => {
            state.value = action.payload
        }),
        getfilteredBooks: ((state, action)=>{
            state.value = action.payload
        })
    }

})


export default bookSlice.reducer
export const { getAllBooks, getfilteredBooks } = bookSlice.actions