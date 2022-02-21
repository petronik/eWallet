import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import balanceSlice from "../features/balance/balanceSlice";
import allTransactionsSlice from "../features/allTransactions/allTransactions";
import summarySlice from "../features/infirmationSummary/summarySlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    balance: balanceSlice.reducer,
    allTransactions: allTransactionsSlice.reducer,
    summary: summarySlice.reducer,
  }
});