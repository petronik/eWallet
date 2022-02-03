import React from 'react';
import Add from './Add';
import TotalBalanceBox from './TotalBalanceBox';

import styles from './Overview.module.scss'




const Overview = () => {
  return (
    <div className={styles.container}>
      <TotalBalanceBox/>
      <Add/>
    </div>
  );
};

export default Overview;