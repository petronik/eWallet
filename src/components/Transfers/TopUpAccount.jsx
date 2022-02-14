import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './MiddleSection.module.scss'
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import InfoIcon from '@mui/icons-material/Info';


const TopUpAccount = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [success , setSuccess] = useState(false);
  const amountInput = document.querySelector('#amountInput');

  const handleSubmit = (e) => {
    e.preventDefault();
    setAmount(e.target[0].value)
    amountInput.value = '';
    console.log(amount);
    setSuccess(true)
    navigate('topupsuccess')

  }
  

  const handleCancel = () => {
    setAmount('')
    amountInput.value = '';
  }

  return (
    <div className={styles.transferMain}>
      <div>Top up account <span className={styles.topupInfo}><InfoIcon/></span> </div> 
      <p>Amount</p>
      <form onSubmit={handleSubmit} >
        <TextField 
        id="amountInput" 
        label="Enter the amount" 
        name='amount'
        variant="outlined" 
        onChange={(e) => setAmount(e.target.value)}

        />
        <Button 
          sx={{
            marginTop: '40px',
          }}
          type='submit'
          variant='contained'
          // disabled={amountInput.value === '' ? true : false}
        >
          Top up
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
    </div>
  )
}

export default TopUpAccount