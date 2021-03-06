import {useRef, useState, useEffect} from 'react';
import { faCheck, faInfoCircle, faTimes, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate} from 'react-router-dom';
import axios from '../../api/axios';
import styles from './Register.module.scss'

const USER_REGEX = /^[a-zA-z][a-zA-Z0-9-_@.]{3,40}$/;
const PWD_REGEX = /^(?=.*[a-z]).{2,24}/;
const REGISTER_URL = '/user/signup'

const Register = () => {

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  
  const [first_name] = useState('');
  const [last_name] = useState('');
  const [birth_date] = useState('');

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(()=> {
    userRef.current.focus();
  }, [])

  useEffect(()=> {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user])

  useEffect(()=> {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd, matchPwd])

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const response = await axios.post(REGISTER_URL,
          {username: user, password: pwd, email : user, first_name, last_name, birth_date},
          {
            headers: { 'Content-Type': 'application/json',
                      'Access-Control-Allow-Origin': '*'}
          }
        );
        console.log(response.data);
        navigate('/')
    }catch(err) {
      if(!err?.response) {
        setErrMsg('No Server Response')
      } else if (err.response?.status === 400) {
          setErrMsg('Email already registered');
      } else if (err.response?.status === 401) {
          setErrMsg('Unauthorized');
      } else {
          setErrMsg('Registering Failed')
      } 
    }
  }
  return (
    <section className={styles.loginContainer}>
      <div className={styles.loginWrapper}>
      <h1>Create an account</h1>
      <p>Gain access to additional features such as Watchlist <br/> and Portfolio tracking. Already have an account?  
        <span>
          <Link to='/' >Log in</Link>
        </span>
      </p>
      <p ref={errRef}  className={ errMsg ? styles.errmsg : styles.offscreen}>{errMsg}</p>
        <form onSubmit={handleSubmit} >
            <label htmlFor="email">
              Email address
              <span className={validName ? styles.valid : styles.hide}>
                <FontAwesomeIcon icon={faCheck}/>
              </span>
              <span  className={validName || !user ? styles.hide : styles.invalid} >
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </label>
            <input 
              placeholder='Enter your email address'
              type="text"
              id='email'
              ref={userRef}
              autoComplete='off'
              onChange={(e)=> setUser(e.target.value)}
              required
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            
            />
            
            <p className={userFocus && user && !validName ? styles.instructions : styles.offscreen}>
              <FontAwesomeIcon icon={faInfoCircle} />
              4 to 40 characters.<br/>
              Must begin with a letter. <br/>
              Letters, numbers, underscores, hyphens allowed.
            </p>
            <label htmlFor="password">
              Password
              <span className={validPwd ? styles.valid : styles.hide}>
                <FontAwesomeIcon icon={faCheck}/>
              </span>
              <span  className={validPwd || !user ? styles.hide : styles.invalid} >
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </label>
            <input 
              placeholder='Enter your password'
              type={ showPassword ? "text" : "password"}
              id='password'
              onChange={(e)=> setPwd(e.target.value)}
              required
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <div 
              className={styles.alingend} 
              onClick={togglePassword}>
            <span className={showPassword ? styles.hide : styles.show}>
              <FontAwesomeIcon icon={faEye} />
            </span>
            <span className={!showPassword ? styles.hide : styles.show} >
              <FontAwesomeIcon icon={faEyeSlash} />
            </span>
            </div>
            <p className={pwdFocus && !validPwd ? styles.instructions : styles.offscreen}>
              <FontAwesomeIcon icon={faInfoCircle} />
              3 to 24 characters.<br/>
              Must include uppercase and lowercase letters, a number and a special character.<br />
              Allowed special characters: ! @ # $ %
            </p>
            <label htmlFor="confirm_pwd">
              Confirm Password
              <span className={validMatch && matchPwd ? styles.valid : styles.hide}>
                <FontAwesomeIcon icon={faCheck}/>
              </span>
              <span className={validMatch || !matchPwd ? styles.hide : styles.invalid}>
                <FontAwesomeIcon icon={faTimes}/>
              </span>
            </label>
            <input  
              placeholder='Enter your password'
              type={ showPassword ? "text" : "password"}
              id='confirm_pwd'
              onChange={(e)=> setMatchPwd(e.target.value)}
              required
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <div 
              className={styles.alingend} 
              onClick={togglePassword}>
            <span className={showPassword ? styles.hide : styles.show}>
              <FontAwesomeIcon icon={faEye} />
            </span>
            <span className={!showPassword ? styles.hide : styles.show} >
              <FontAwesomeIcon icon={faEyeSlash} />
            </span>
            </div>
            <p className={matchFocus && !validMatch ? styles.instructions : styles.offscreen} >
              <FontAwesomeIcon icon={faInfoCircle}/>
              Must match the first password input field
            </p>
            <button disabled={!validName || !validPwd || !validMatch ? true : false} >Create</button>
        </form>
      </div>
    </section>
  );
};

export default Register;