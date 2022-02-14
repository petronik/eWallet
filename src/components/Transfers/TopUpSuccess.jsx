import React from 'react'
import Button  from '@mui/material/Button'
import styles from './TopUpSuccess.module.scss'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const TopUpSuccess = () => {
  return (
    <section className={styles.sectionTopUpSuccess}>
      <div className={styles.bgsuccess} >
        <CheckCircleIcon
        sx={{
          position: 'absolute',
          left: '50%',
          bottom: '-30%',
          background: '#fff',
          borderRadius: '50%',
          fontSize: 60
        }}
        color="success"
        fontSize='large'
        />
      </div>
      <div className={styles.sectionTopUpSuccess__wrapper}>

      <p>Your account has been successfully <br/> topped up for $3 400.00</p>
      <Button
      variant='contained'
      >
        Top up again
      </Button>
      
      <Button
        sx={{
          marginTop: '20px',
        }}
      >
        Back to the main page
      </Button>
      </div>
    </section>
  )
}

export default TopUpSuccess