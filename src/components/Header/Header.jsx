import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import MobileNavbar from './MobileNavbar'
import Navbar from './Navbar'



import styles from './Header.module.scss'
import logoImage from '../../assets/img/logo.svg'
import logIn from '../../assets/img/login.svg'

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.login}>
        <span
          onClick={() => navigate('/')}
        >Log In
        </span>
          <img src={logIn} alt="Log in" />
      </div>
  )
}
const Logout = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.login}>
        <span
          onClick={() => navigate('/')}
        >Log out
        </span>
          <img src={logIn} alt="Log in" />
      </div>
  )
}


const Header = () => {
  
  const isMobile = useMediaQuery({ maxWidth: 768})
  const [isLoggedIn] = useState(true)

  return (
    <header className={styles.header}>
      
      {isLoggedIn && isMobile && <MobileNavbar/>}

      <div className={styles.logo}>
        <img src={logoImage} alt="Bank Logo" />
        <p>Bank for people</p>
      </div>
      { isLoggedIn && !isMobile  && <Navbar/>}
      
      { !isLoggedIn && <Login/>}
      { isLoggedIn && <Logout/>}

    </header>
  );
};

export default Header;