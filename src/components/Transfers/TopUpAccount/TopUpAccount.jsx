import React, { useState } from 'react'
import { useNavigate, Outlet } from 'react-router-dom';
import styles from '../MiddleSection.module.scss'
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import InfoIcon from '@mui/icons-material/Info';
import { useDispatch } from 'react-redux'
import axios from '../../../api/axios';
import balanceSlice from '../../../features/balance/balanceSlice';

const FILL_URL = '/transactions/fill'
const TopUpAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fillValue, setFillValue] = useState('');
  const fillAccount = async () => {
    try{
      const res = await axios.post(FILL_URL,
          {
            value: fillValue,
          },
          {
            headers: {
              'Authorization' :'Bearer ' + localStorage.getItem('token')
            }
          }
        )
        console.log(res.data)
        dispatch(balanceSlice.setBalance(res.data.balance))
      return res
    }catch(err) {
      console.log(err)
    }
  }
  const handleSubmit =  (e) => {
    e.preventDefault();
    fillAccount()
    setFillValue('')
    navigate('success' )
  }
  const handleCancel = () => {
    
      setFillValue('')    
    
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
        value={fillValue}
        variant="outlined" 
        onChange={(e) => setFillValue(e.target.value)}
        />
        <Button 
          sx={{
            marginTop: '40px',
          }}
          type='submit'
          variant='contained'
          disabled={fillValue === ''}
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
      <Outlet/>
    </div>
  )
}

export default TopUpAccount