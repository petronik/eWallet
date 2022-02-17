import { createSlice } from '@reduxjs/toolkit'
// import axios from '../../api/axios'

const initialState = {
  balance: 0,

}
// const BALANCE_URL = '/information/balance';
  
// export const getBalance = createAsyncThunk('balance/getBalance',
// async ({currency, auth}, { rejectWithValue, dispatch}) => {
  
//     const res = await axios.get(
//         BALANCE_URL,
//         {params: {currency: `${currency}`},
//         headers: {
//           'Authorization' :'Bearer ' + auth.accessToken
//         }}
//       );
//       console.log(res.data.balance)
//     dispatch(setBalance(res.data.balance))
//   }
// )
export const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    setBalance: (state, action) => {
      state.balance = action.payload
    },
    

  },
  // extraReducers: {
  //   [getBalance.fulfilled]: () => console.log('getBalance: fulfilled'),
  //   [getBalance.pending]: () => console.log('getBalance: pending'),
  //   [getBalance.rejected]: () => console.log('getBalance: rejected'),
  // }
})
// export const { setBalance } = balanceSlice.actions;
export default balanceSlice;
