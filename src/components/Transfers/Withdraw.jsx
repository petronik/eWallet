import React from 'react'
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import InfoIcon from '@mui/icons-material/Info';
import styles from './MiddleSection.module.scss'

const Withdraw = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
  }

  return (
    <div className={styles.transferMain}>
      <div>Withdraw <span className={styles.topupInfo}><InfoIcon/></span> </div> 
      <p>Amount</p>
        <form onSubmit={handleSubmit} >
          <TextField 
            id="outlined-basic" 
            label="Enter the amount" 
            placeholder='0.00$'
            variant="outlined" />
          <Button 
            sx={{
              marginTop: '40px',
            }}
            
            variant='contained'
          >
            Withdraw
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

export default Withdraw