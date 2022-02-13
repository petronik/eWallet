import React from 'react'
import Button  from '@mui/material/Button'
import styles from './TopUpSuccess.module.scss'


const TopUpSuccess = () => {
  return (
    <section className={styles.sectionTopUpSuccess}>
      <div className={styles.sectionTopUpSuccess__wrapper}>

      <p>Your account has been successfully <br/> topped up for $3 400.00</p>
      <Button
      variant='contained'
      >
        Top up again
      </Button>
      
      <Button
        
      >
        Back to the main page
      </Button>
      </div>
    </section>
  )
}

export default TopUpSuccess