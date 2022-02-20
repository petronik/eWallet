import React, {useState, useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import MobileNavbar from './MobileNavbar'
import Navbar from './Navbar'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AuthContext from '../../context/AuthProvider';
import axios from '../../api/axios';

import styles from './Header.module.scss'
import logoImage from '../../assets/img/logo.svg'
import logIn from '../../assets/img/login.svg'

const LOGOUT_URL = '/user/logout';

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
const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 768});
  const { auth, setAuth } = useContext(AuthContext);
  // const accessToken = localStorage.getItem('token')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    
      localStorage.getItem('username') ? setIsLoggedIn(true) : setIsLoggedIn(false)

    
    console.log('Login: ' + isLoggedIn)
    console.log(auth.username)
  }, [ auth, isLoggedIn])

  

  const UserAvatar = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false)
    const head = {headers: {'Authorization' :'Bearer ' + localStorage.getItem('token')}};

    const logout = async () => {
      try{
        const response = await axios.post(LOGOUT_URL,{}, head)
          console.log(response)
        } catch(err) {
          console.log(err)
        }
        setAuth({});
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        navigate('/');
    }
  
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
              <li  onClick={() => navigate('account')}>Account</li>
              <li>Settings</li>
              <li>Notifications</li>
              <li onClick={ logout }>Log out</li>
            </ul>
          } 
          
          
        </div>
    )
  }

  return (
    <header className={styles.header}>
      
      {isLoggedIn && isMobile && <MobileNavbar/>}

      <div className={styles.logo}>
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