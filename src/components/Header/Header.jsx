import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import MobileNavbar from './MobileNavbar'
import Navbar from './Navbar'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AuthContext from '../../context/AuthProvider';


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



const Header = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 768});
  const [isLoggin, setIsLoggin] = useState(true);
  const {auth, setAuth } = useContext(AuthContext);

  // if(auth.username ) {
  //   setIsLoggin(true)
  // }

  const UserAvatar = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false)
  
    const logout = async () => {
      console.log(auth)
      setAuth({});
      setIsLoggin(false)
      navigate('/');
      console.log(auth)
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
              <li  onClick={() => navigate('/account')}>Account</li>
              <li>Settings</li>
              <li>Notifications</li>
              <li onClick={logout} >Log out</li>
            </ul>
          } 
          
          
        </div>
    )
  }

  return (
    <header className={styles.header}>
      
      {isLoggin && isMobile && <MobileNavbar/>}

      <div className={styles.logo}
            onClick={() => navigate('/')}
      >
        <img src={logoImage} alt="Bank Logo" />
        <p>Bank for people</p>
        
      </div>
      { isLoggin && !isMobile  && <Navbar/>}
      
      { !isLoggin && <Login/>}
      { isLoggin && <UserAvatar/>}

    </header>
  );
};

export default Header;