import React from 'react';
import MeterBar from './MeterBar'
import SelectCurrency from './SelectCurrency'
import styles from '../stylesOverview/TotalBalanceBox.module.scss'

const TotalBalanceBox = () => {
  return (
    <section className={styles.totalBalanceBox}>
        <p>Account details</p>
        <div className={styles.totalBalanceBoxItem}>
          <h6>TOTAL BALANCE</h6>
          <div className={styles.itemAmount}>
            <SelectCurrency/>
          </div>
            <MeterBar/>
        </div>
      </section>
  );
};

export default TotalBalanceBox;