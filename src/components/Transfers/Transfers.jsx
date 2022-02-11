import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Transfers.module.scss'
import TopUpAccount from './TopUpAccount'


const Transfers = () => {
const menu = [
  {
    title: 'Top up card',
    link: '/transfers/topupcard',
  },
  {
    title: 'Send money',
    link: '/transfers/sendmoney',
  },
  {
    title: 'Withdraw',
    link: '/transfers/withdraw',
  },
]

  return (
    <section>
      <div>
        <h5>Transfers</h5>
        <ul>
          {menu.map((item, indx) => (
            <li key={`menu item${indx}`} >
              <NavLink to={item.link}>{item.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.transferItemWrapper}>
      <TopUpAccount/>


      </div>
      
      <div>
        <h3>Read the latest news on the system update  </h3>
      </div>
    </section>
  );
};

export default Transfers;