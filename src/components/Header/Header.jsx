import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import MobileNavbar from './MobileNavbar'



import styles from './Header.module.scss'
import logoImage from '../../assets/img/logo.svg'
import logIn from '../../assets/img/login.svg'



const Header = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 768})

  return (
    <header className={styles.header}>
      
      {isMobile && <MobileNavbar/>}

      <div className={styles.logo}>
        <img src={logoImage} alt="Bank Logo" />
        <p>Bank for people</p>
      </div>
      <div className={styles.login}>
        <span
          onClick={() => navigate('/')}
        >Log In
        </span>
          <img src={logIn} alt="Log in" />
      </div>
    </header>
  );
};

export default Header;