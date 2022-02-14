import React from 'react'
import styles from './MiddleSection.module.scss'
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import InfoIcon from '@mui/icons-material/Info';
import InputAdornment from '@mui/material/InputAdornment';
const SendMoney = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
  }

  return (
    <div className={styles.transferMain}>
    <div>Send money <span className={styles.topupInfo}><InfoIcon/></span> </div> 
    <p>US and foregein banks</p>
   <form onSubmit={handleSubmit} >
     <span>To</span>
   <TextField 
    // id="outlined-basic" 
    label="Enter email" 
    placeholder='Email'
    variant="outlined" 
   />
   <span>Amount</span>
   <TextField 
    // id="outlined-basic" 
    label="Enter the amount" 
    placeholder='0.00$'
    helperText="When transferring more than 15 000.00$, you must indicate recipient’s name"
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <InfoIcon />
        </InputAdornment>
      )
      
    }}
    
    variant="outlined" 
   />
   <span></span>
   <TextField 
    // id="outlined-basic" 
    label="Comentar" 
    multiline
    rows={4}
    placeholder='Add comentar'
    variant="outlined" 
   />
   <Button 
     sx={{
       marginTop: '40px',
     }}
     
     variant='contained'
   >
     Top up
   </Button>
   <Button
     sx={{
       marginTop: '40px',
     }}
     color="secondary"
   >
     Cancel
   </Button>
     
   </form>
 </div>
  )
}

export default SendMoney