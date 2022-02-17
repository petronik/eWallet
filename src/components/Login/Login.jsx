import React, {useState, useEffect} from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from '../../api/axios'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import useAuth from '../../hooks/useAuth';
import styles from './Login.module.scss'

const LOGIN_URL = '/user/login'



const Login = () => {
  const {setAuth} = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/overview'



  const[username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  
  const [showPassword, setShowPassword] = useState(false);


  useEffect(() => {
    setErrMsg('');
  }, [username, password])

  const handleChange = () => (e) => {
    setPassword( e.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword( !showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post(LOGIN_URL, 
        `username=${username}&password=${password}`,
        {
          headers: {'Content-Type': 'application/x-www-form-urlencoded',
                    'Access-Control-Allow-Origin': '*'
          }
        }
      );
      
      // console.log(response.data);
      const accessToken = response?.data?.access_token;
      localStorage.setItem('token', response?.data?.access_token)
      setAuth({username, password, accessToken})
      setUserName('');
      setPassword('');
      navigate(from, { replace: true});
    } catch (err) {
      if(!err?.response) {
        setErrMsg('No Server Response')
      } else if (err.response?.status === 400) {
          setErrMsg('Missing Email or Password');
      } else if (err.response?.status === 401) {
          setErrMsg('Unauthorized');
      } else {
          setErrMsg('Login Failed')
      }
    }

    
  }

  return (
   
      <section className={styles.loginContainer}>
        <p  className={errMsg ? styles.errmsg : styles.offscreen}>{errMsg}</p>
        <div className={styles.loginWrapper}>
        <h1>Log In to Bank for people</h1>
        <p>New to Bank for people? <span>
        <Link to='/register' >Create an account</Link>
        </span>
        </p>
        
        <form noValidate autoComplete='off' onSubmit={handleSubmit}>
          <TextField 
          label='Email address'
          size='small'
          margin='normal'
          onChange={(e)=> setUserName(e.target.value)}
          />
          
          <FormControl  variant="outlined" size='small' margin='normal'>
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handleChange()}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <span>Forgot password?</span>
          <Button 
            id='submitBtn'
            type='submit'
            variant='contained'
          >Submit</Button>
        </form>
        </div>
      </section>
     
  );
};

export default Login;