import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button  from '@mui/material/Button'
import styles from './TopUpSuccess.module.scss'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const TopUpSuccess = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.sectionTopUpSuccess}>
      <div className={styles.bgsuccess} >
        <CheckCircleIcon
        sx={{
          position: 'absolute',
          left: '50%',
          bottom: '-20%',
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
      onClick ={ ()=> navigate('/transfers')}
      >
        Top up again
      </Button>
      
      <Button
        sx={{
          marginTop: '20px',
        }}
        onClick ={ ()=> navigate('/overview')}
      >
        Back to the main page
      </Button>
      </div>
    </section>
  )
}

export default TopUpSuccess