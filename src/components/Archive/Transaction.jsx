import React from 'react'
// import { useDispatch } from 'react-redux'
import WithdrawIcon from '../../assets/img/WithdrawGreen.svg'
import styles from './Transaction.module.scss'

const Transaction = (transaction) => {
    // const dispatch = useDispatch();
  return (
    <div className={styles.listWrapper}>
    <img src={WithdrawIcon} alt="Withdraw icon" />
    <div className={styles.listData}>
      <p>Bank account</p>
      <span>{ transaction.type }</span>
    </div>
    <div className={styles.withdrawAmount}>- $<span>{transaction.value }</span></div>
  </div>
  )
}

export default Transaction