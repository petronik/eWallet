import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import   balanceSlice  from '../../../features/balance/balanceSlice';
import axios from '../../../api/axios';
import styles from '../stylesOverview/TotalBalanceBox.module.scss'

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
  const [currency, setCurrency] = useState('usd');
  const [loader, setLoader] = useState(false);

  
  

  const getBalance = async () => {
    try{
      const res = await axios.get(
        BALANCE_URL,
        {params: {currency: `${currency}`},
        headers: {
          'Authorization' :'Bearer ' + localStorage.getItem('token')
        }}
      );
      console.log(`Curency:  ${res.config.params.currency}, Balance: ${res.data.balance}`)
      dispatch(balanceSlice.actions.setBalance(res.data.balance))
      setLoader(true);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect( () => {
    getBalance()
  }, [currency]);

  const handleChange = (event) => {
    setCurrency(event.target.value);
    setLoader(false)
    console.log(balance)
  };
  return (
    <div className={styles.itemAmount}>
      <span>{ loader ? balance : 'Loading...'
                                  
                                  
            }
      </span>
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
    </div>

  )
  }

  export default SelectCurrency;