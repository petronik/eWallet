import React from 'react';
import { Link } from 'react-router-dom';
import TopUp from '../../assets/img/TopUp.svg'
import Money from '../../assets/img/SendMoney.svg'
import Withdraw from '../../assets/img/Withdraw.svg'
import styles from './stylesOverview/TransfersAndPayments.module.scss'

const TransfersAndPayments = () => {
  return (
    <section className={styles.transfersContainer} >
      <h3>Transfers and Payments</h3>
      <div className={styles.transfersButtonBlock}>
        <Link to={'/transfers/topup'} className={styles.transfersButton}>
          <img src={TopUp} alt="TopUp icon" />
          <span>Top up balance</span>
        </Link>
        <Link to={'/transfers/sendmoney'} className={styles.transfersButton}>
          <img src={Money} alt="Money icon" />
          <span>Send money</span>
        </Link>
        <Link to={'/transfers/withdraw'} className={styles.transfersButton}>
          <img src={Withdraw} alt="Withdraw icon" />
          <span>Other payments</span>
        </Link>
      </div>
    </section>
  );
};

export default TransfersAndPayments;