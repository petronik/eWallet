import React from 'react';

import MeterBar from './MeterBar'
import {  useSelector } from 'react-redux'

import SelectCurrency from './SelectCurrency'

import styles from '../stylesOverview/TotalBalanceBox.module.scss'

const TotalBalanceBox = () => {
  
  const balance = useSelector((state) => state.balance.balance)   
  return (
    <section className={styles.totalBalanceBox}>
        <p>Account details</p>
        <div className={styles.totalBalanceBoxItem}>
          <h6>TOTAL BALANCE</h6>
          <div className={styles.itemAmount}>
            <span>{ balance }</span>
            <SelectCurrency/>
          </div>
            <MeterBar/>
        </div>
      </section>
  );
};

export default TotalBalanceBox;