import React from 'react';
import Add from './Add';
import TotalBalanceBox from './TotalBalanceBox';
import TransfersAndPayments from './TransfersAndPayments';
import ChartBox from './ChartBox'

import styles from './stylesOverview/Overview.module.scss'




const Overview = () => {
  return (
    <div className={styles.container}>
      <TotalBalanceBox/>
      <Add/>
      <TransfersAndPayments/>
      <ChartBox/>
    </div>
  );
};

export default Overview;