import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const allTransactionsSlice = createSlice({
    name: 'allTransactions',
    initialState,
    reducers: {
        setAllTransactions: (state, action) => {
            state.allTransactions = action.payload
        },
    }
})

export default allTransactionsSlice;