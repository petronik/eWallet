import React, { useState } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import styles from './MiddleSection.module.scss'
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import InfoIcon from '@mui/icons-material/Info';




const SendMoney = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    recipient: '',
    amount: '',
    comment: '',
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value});
  };

  const handleContinue = () => {
    // e.preventDefault();
    navigate('confirmtransaction')
    console.log()
    console.log(values)
  }
  const handleCancel = () => {
    setValues({...values,
      recipient: '',
      amount: '',
      comment: '',
    })
    
  }


  return (
    <div className={styles.transferMain}>
    <div>Send money <span className={styles.topupInfo}><InfoIcon/></span> </div> 
    <p>US and foregein banks</p>
   <form id='sendMoneyForm' >
     <span>To</span>
   <TextField 
    label="Enter email" 
    placeholder='Email'
    variant="outlined" 
    value={values.recipient}
    onChange={handleChange('recipient')}
   />
   <span>Amount</span>
   <TextField 
    label="Enter the amount" 
    placeholder='0.00$'
    helperText="When transferring more than 15 000.00$, you must indicate recipient’s name"
    onChange={handleChange('amount')}
    value={values.amount}
    
    variant="outlined" 
   />
   <span></span>
   <TextField 
    label="Comentar" 
    multiline
    rows={4}
    placeholder='Add comentar'
    variant="outlined" 
    value={values.comment}
    onChange={handleChange('comment')}
   />
   <Button 
      sx={{
       marginTop: '40px',
     }}
     type='submit'
     variant='contained'
     onClick={handleContinue}
   >
     Continue
   </Button>
   <Button
     sx={{
       marginTop: '40px',
     }}
     color="secondary"
     onClick={handleCancel}
   >
     Cancel
   </Button>
     
   </form>
   <Outlet/>
 </div>
  )
}

export default SendMoney