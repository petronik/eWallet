import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    "payment_fill": 4476205.0,
    "payment_made": 732.0,
    "payment_received": 732.0,
    "payment_withdraw": 4475059.0
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