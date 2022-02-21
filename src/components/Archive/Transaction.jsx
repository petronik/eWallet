import React from 'react'
import WithdrawIcon from '../../assets/img/WithdrawGreen.svg'
import styles from './Transaction.module.scss'

const Transaction = (transaction) => {
    const item = transaction.transaction;
  return (
    <div className={styles.listWrapper}>
    <img src={WithdrawIcon} alt="Withdraw icon" />
    <div className={styles.listData}>
      <p>Bank account</p>
      <span>{ item.type }</span>
    </div>
    <div className={styles.withdrawAmount}>- $<span>{item.value }</span></div>
  </div>
  )
}

export default Transaction