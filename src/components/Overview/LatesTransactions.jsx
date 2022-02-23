import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TopUpIcon from '../../assets/img/TopUpBlack.svg';
import WithdrawIcon from '../../assets/img/WithdrawGreen.svg';
import TransferIcon from '../../assets/img/Transfer.svg';
import styles from './stylesOverview/LatesTransactions.module.scss'

const TopUp = () => {
  return (
  <section className={styles.listWrapper}>
    <img src={TopUpIcon} alt="Top up icon" />
    <div className={styles.listData}>
      <p><span>From:</span>Kate Abba</p>
      <span>Top up card</span>
    </div>
    <div className={styles.topupAmount}>+ $<span>6 425.00</span></div>
  </section>
  )
}
const TransferMoney = () => {
  return (
  <div className={styles.listWrapper}>
    <img src={TransferIcon} alt="Top up icon" />
    <div className={styles.listData}>
      <p><span>From:</span>Kate Abba</p>
      <span>Transfer money</span>
    </div>
    <div className={styles.topupAmount}>+ $<span>6 425.00</span></div>
  </div>
  )
}

const Withdraw = () => {
  return (
    <div className={styles.listWrapper}>
    <img src={WithdrawIcon} alt="Withdraw icon" />
    <div className={styles.listData}>
      <p>Bank account</p>
      <span>Withdraw</span>
    </div>
    <div className={styles.withdrawAmount}>- $<span>4 667.56</span></div>
  </div>
  )
}

const LatesTransactions = () => {
  const [isActive, setActive] = useState(true);
  useEffect(() => {
    console.log(isActive)

  }, [isActive])
  return (
    <div className={`${styles.containerWrapper } ${isActive ? styles.overflow : ''}`}>
      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <h4>Latest transactions</h4>
          <div className={styles.searchWrapper}>
            <SearchIcon/>
          <input type="search" placeholder='Search'/>
          </div>
          <span onClick={() => setActive(!isActive)} >See all</span>
        </div>
      <div className={styles.transactionsList}>
        <div className={styles.listItemBox}>
          <div className={styles.listItemHeader}>
            <h5 className={styles.listItemDate}>Today</h5>
            <span>-$246 916.00</span>
          </div>
          <ul>
            <li>
              <TopUp/>
            </li>
            <li>
              <Withdraw/>
            </li>
          </ul>
        </div>
        <div className={styles.listItemBox}>
          <div className={styles.listItemHeader}>
            <h5 className={styles.listItemDate}>Yesterday</h5>
            <span>-$246 916.00</span>
          </div>
          <ul>
            <li>
              <TopUp/>
            </li>
            <li>
              <TransferMoney/>
            </li>
            <li>
              <TransferMoney/>
            </li>
          </ul>
        </div>
        <div className={styles.listItemBox}>
          <div className={styles.listItemHeader}>
            <h5 className={styles.listItemDate}>Yesterday</h5>
            <span>-$246 916.00</span>
          </div>
          <ul>
            <li>
              <TopUp/>
            </li>
            <li>
              <TransferMoney/>
            </li>
            <li>
              <TransferMoney/>
            </li>
          </ul>
        </div>
        <div className={styles.listItemBox}>
          <div className={styles.listItemHeader}>
            <h5 className={styles.listItemDate}>Yesterday</h5>
            <span>-$246 916.00</span>
          </div>
          <ul>
            <li>
              <TopUp/>
            </li>
            <li>
              <TransferMoney/>
            </li>
            <li>
              <TransferMoney/>
            </li>
          </ul>
        </div>
      </div>
      </div>
      <div className={styles.bottomFade} ></div>
    </div>
  );
};

export default LatesTransactions;