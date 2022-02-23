import React, {useState } from 'react';
import { useNavigate} from 'react-router-dom';
import CloseBtn from './CloseBtn';
import Burger from './Burger';
import logoImage from '../../assets/img/bankLogo.svg'
import styles from './Header.module.scss'

const MobileNavbar = (props) => {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper} id='wrapper'>
      <Burger isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
        {isOpen && (
          <div  className={styles.menuWrapper}>
            <div className={styles.menuHeader}>
              <div className={styles.logo}>
                <img src={logoImage} alt="Bank Logo" />
                <p>Bank for people</p>
              </div>
              <CloseBtn isOpen={isOpen} toggle={() => setOpen(!isOpen)}/>
            </div>
            <h3>Menu</h3>
            <ul className={styles.navMenu}>
              <li onClick={()=> navigate('overview')} > Overview</li>
              <li onClick={()=> navigate('transfers')}>Transfers
                <ul className={styles.menu_transfers}>
                  <li onClick={()=> navigate('/topup')} >Top up</li>
                  <li onClick={()=> navigate('sendmoney')} >Send money</li>
                  <li onClick={()=> navigate('withdraw')} >Withdraw</li>
                </ul>
              </li>
              <li onClick={()=> navigate('archive')}>Archive</li>
            </ul>
          </div>
          )}
      </div>
  );
};

export default MobileNavbar;