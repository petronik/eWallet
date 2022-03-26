import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    "payment_fill": 0,
    "payment_made": 0,
    "payment_received": 0,
    "payment_withdraw": 0
};

export const summarySlice = createSlice({
    name: 'summary',
    initialState,
    reducers: {
        setSummary: (state, action) => {
            state.summary = action.payload
        }
    }
});

export default summarySlice;