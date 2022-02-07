import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import MobileNavbar from './MobileNavbar'
import Navbar from './Navbar'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



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
const UserAvatar = () => {
  const navigateUser = useNavigate();
  const [show, setShow] = useState(false)
  return (
    <div className={styles.userAvatar}
    onClick={()=>setShow(!show)}
    >
        <span className={styles.userAvatarPhoto}>
          DSH
        </span>
        <div className={styles.userAvatarName}>
        <p>Dora Sher</p>
        <KeyboardArrowDownIcon/>
        </div>
        {
          show &&  <ul >
            <li  onClick={() => navigateUser('/account')}>Account</li>
            <li>Settings</li>
            <li>Notifications</li>
            <li>Log out</li>
          </ul>
        } 
        
        
      </div>
  )
}


const Header = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 768})
  const [isLoggedIn] = useState(true)

  return (
    <header className={styles.header}>
      
      {isLoggedIn && isMobile && <MobileNavbar/>}

      <div className={styles.logo}
            onClick={() => navigate('/')}
      >
        <img src={logoImage} alt="Bank Logo" />
        <p>Bank for people</p>
        
      </div>
      { isLoggedIn && !isMobile  && <Navbar/>}
      
      { !isLoggedIn && <Login/>}
      { isLoggedIn && <UserAvatar/>}

    </header>
  );
};

export default Header;