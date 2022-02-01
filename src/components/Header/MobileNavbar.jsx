import React, {useState} from 'react';
// import { Link } from 'react-router-dom';
// import { menu } from './menu';
import MenuToggle from './MenuToggle';
import styles from './Header.module.scss'

const MobileNavbar = (props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={styles.wrapper} id='wrapper'>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
        {isOpen && (
          <div className={styles.menuWrapper}>
            <h3>Menu</h3>
            <ul className={styles.navMenu}>
              <li>Overview</li>
              <li>Transfers
                <ul className={styles.menu_transfers}>
                  <li>Top up</li>
                  <li>Send money</li>
                  <li>Withdraw</li>
                </ul>
              </li>
              <li>Archive</li>
            </ul>
          </div>
          )}
      </div>
  );
};

export default MobileNavbar;