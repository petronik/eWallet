import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import balanceSlice from "../features/balance/balanceSlice";
import allTransactionsSlice from "../features/allTransactions/allTransactions";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    balance: balanceSlice.reducer,
    allTransactions: allTransactionsSlice.reducer,
  }
});