import React from 'react'
import styles from './TopUpAccount.module.scss'
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import InfoIcon from '@mui/icons-material/Info';


const TopUpAccount = () => {

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(e)
}

  return (
    <div className={styles.topUpAccount}>
       <div>Top up account <span className={styles.topupInfo}><InfoIcon/></span> </div> 
       <p>Amount</p>
      <form onSubmit={handleSubmit} >
      <TextField id="outlined-basic" label="Enter the amount" variant="outlined" />
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

export default TopUpAccount