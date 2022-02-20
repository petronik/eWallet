import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import axios from '../../api/axios';
import { Button } from '@mui/material';
import balanceSlice from '../../features/balance/balanceSlice';

import TextField from '@mui/material/TextField';
import InfoIcon from '@mui/icons-material/Info';
import styles from './MiddleSection.module.scss'


const WITHDRAW_URL = '/transactions/withdraw';

const Withdraw = () => {
  const dispatch = useDispatch();
  const [withdrawAmount, setWithdrawAmount] = useState();
  const withdrawInput = document.querySelector('#withdrawInput');

  const withdrawMoney = async () => {
    try{
      const res = await axios.post(WITHDRAW_URL,
        {
          value: withdrawAmount,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    withdrawMoney();
    withdrawInput.value = '';
    console.log(e)
  }

  const handleCancel = () => {
    setWithdrawAmount('')
    withdrawInput.value = '';
  }

  return (
    <div className={styles.transferMain}>
      <div>Withdraw <span className={styles.topupInfo}><InfoIcon/></span> </div> 
      <p>Amount</p>
        <form onSubmit={handleSubmit} >
          <TextField 
            id="withdrawInput" 
            label="Enter the amount" 
            placeholder='0.00$'
            variant="outlined" 
            onChange={(e)=> setWithdrawAmount(e.target.value) }
          />
          <Button 
            sx={{
              marginTop: '40px',
            }}
            type='submit'
            variant='contained'
          >
            Withdraw
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

export default Withdraw