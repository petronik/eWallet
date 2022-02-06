import React, {useState} from 'react';

import styles from './stylesOverview/TotalBalanceBox.module.scss'

const currencies = [
  {
    value: 'USD',
    label: 'USD',
  },
  {
    value: 'EUR',
    label: 'EUR',
  },
  {
    value: 'BTC',
    label: 'BTC',
  },
  {
    value: 'JPY',
    label: 'JYP',
  },
];

const SelectCurrency = () => {
  const [currency, setCurrency] = useState('USD');

  const handleChange = (event) => {
    setCurrency(event.target.value);
    console.log(currency)
  };
  return (
    
        <select
          id="select-currency"
          label="Select"
          value={currency}
          onChange={handleChange}
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

  )
  }

  const MeterBar = () => {
    return (
      <div className={styles.meterBar}>
        <label htmlFor="meterBar">Online payments limit for the month </label>
        <div className={styles.meter} >
          <span style={{width : '75%'}} className={styles.meterProgress}
          ></span>
        </div>
        <span>2,400 out of 9,000 left</span>
      </div>
    )
  }


const TotalBalanceBox = () => {
  return (
    <section className={styles.totalBalanceBox}>
        <p>Account details</p>
        <div className={styles.totalBalanceBoxItem}>
          <h6>TOTAL BALANCE</h6>
          <div className={styles.itemAmount}>
            <span>1 122 334.00</span>
            <SelectCurrency/>
          </div>
            <MeterBar/>
        </div>
      </section>
  );
};

export default TotalBalanceBox;