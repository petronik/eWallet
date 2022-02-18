import React from 'react';
import AccountSideNav from './AccountSideNav/AccountSideNav';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import styles from './Account.module.scss'


const Account = () => {
  return (
    <section className={styles.containerAccount}>
      <div className={styles.wrapper}>
        <AccountSideNav/>
      </div>
      <div className={styles.wrapper}>
        <PersonalInfo/>
      </div>
      
    </section>
  );
};

export default Account;