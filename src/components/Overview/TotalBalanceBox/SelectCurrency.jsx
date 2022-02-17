import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import   balanceSlice  from '../../../features/balance/balanceSlice';
import axios from '../../../api/axios';

const BALANCE_URL = '/information/balance';
const currencies = [
  {
    value: 'usd',
    label: 'usd',
  },
  {
    value: 'eur',
    label: 'eur',
  },
  {
    value: 'gbp',
    label: 'gbp',
  },
  {
    value: 'cad',
    label: 'cad',
  },
  {
    value: 'aud',
    label: 'aud',
  },
];


const SelectCurrency = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.balance.balance)
  const [currency, setCurrency] = useState(currencies[0].value);

  const getBalance = async () => {
    try{
      const res = await axios.get(
        BALANCE_URL,
        {params: {currency: `${currency}`},
        headers: {
          'Authorization' :'Bearer ' + localStorage.getItem('token')
        }}
      );
      console.log(res.data.balance)
      dispatch(balanceSlice.actions.setBalance(res.data.balance))
      return res
    } catch (err) {
      console.log(err)
    }
  }


  const handleChange = (event) => {
    setCurrency(event.target.value);
    getBalance();
    console.log(balance)
  };
  return (
        <select
          id="select-currency"
          label="Select"
          value={currency}
          onChange={handleChange }
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

  )
  }

  export default SelectCurrency;