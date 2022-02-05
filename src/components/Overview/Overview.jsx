import React from 'react';
import AddOn from './AddOn';
import TotalBalanceBox from './TotalBalanceBox';
import TransfersAndPayments from './TransfersAndPayments';
import ChartBox from './ChartBox'
import LatesTransactions from './LatesTransactions';

import styles from './stylesOverview/Overview.module.scss'




const Overview = () => {
  return (
    <div className={styles.container}>
      <TotalBalanceBox/>
      <AddOn/>
      <TransfersAndPayments/>
      <ChartBox/>
      <LatesTransactions/>
    </div>
  );
};

export default Overview;