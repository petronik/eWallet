import React, {useState} from 'react';
import { Link } from 'react-router-dom';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff'

import styles from './Login.module.scss'



const Login = () => {


  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [email, setEmail] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(email && values.password) {
      console.log(document.querySelector('#submitBtn'))
      document.querySelector('#submitBtn').removeAttribute('disabled')
    }
  }

  return (
    <div className={styles.loginContainer}>
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
        onChange={(e)=> setEmail(e.target.value)}
        />
        
         <FormControl  variant="outlined" size='small' margin='normal'>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
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
    </div>
  );
};

export default Login;