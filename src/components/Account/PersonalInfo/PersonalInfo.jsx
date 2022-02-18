import React from 'react'
import { Link } from 'react-router-dom'
import Box  from '@mui/material/Box'
import TextField from '@mui/material/TextField'

import styles from './PersonalInfo.module.scss'




const PersonalInfo = () => {
  return (
    <div className={styles.containerInfo}>
      <h3>Personal information</h3>
      <div className={styles.avatarWrapper} >
        <span className={styles.avatar} >DSH</span>
        <Link to={'*'}>Upload photo</Link>
      </div>
    <form
      noValidate
      autoComplete="off"
    
    >
        <div>
        <TextField
          className='textfield'
          label="First name"
          defaultValue="Dora"
          inputProps={{
            readOnly: true,
          }}
        />
        <TextField
          className='textfield'
          label="Last name"
          defaultValue="Dora"
          inputProps={{
            readOnly: true,
          }}
        />
        <TextField
          className='textfield'
          label="Client ID"
          defaultValue="Dora"
          inputProps={{
            readOnly: true,
          }}
        />
        <TextField
          className='textfield'
          label="Date of birthday"
          defaultValue="Dora"
          inputProps={{
            readOnly: true,
          }}
        />
        <TextField
          className='textfield'
          label="Email"
          defaultValue="Dora"
          inputProps={{
            readOnly: true,
          }}
        />
        </div>
        <Link to='/overview' >To report incorrect data</Link>
        <div>
        <TextField
        sx={{
          marginTop: '20px',
        }}
          className='textfield'
          label="Phone"
          defaultValue="+33 456 234 33"
          inputProps={{
            readOnly: true,
          }}
        />
        <Link to='/overview' >To report incorrect data</Link>
        </div>

    </form>




    </div>
  )
}

export default PersonalInfo