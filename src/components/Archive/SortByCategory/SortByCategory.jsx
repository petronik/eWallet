import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import  Button  from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import topup from '../../../assets/img/TopUpBlack.svg'
import transfer2 from '../../../assets/img/transfer2.svg'
import withdraw2 from '../../../assets/img/WithdrawDollar.svg'
import other from '../../../assets/img/other.svg'

import styles from './SortByCategory.module.scss'


const SortByCategory = () => {
    const [checkBoxState, setCheckBoxState] = useState({
        transactions: false,
        topUp: false,
        withdraw: false,
        otherTrans: false,
    });
    const {transactions, topUp, withdraw, otherTrans} = checkBoxState
    const handleChange = (event) => {
        setCheckBoxState({...checkBoxState, [event.target.name]: event.target.checked,
        });
        
    };
    const clearFilters = () => {
        setCheckBoxState({transactions: false, topUp: false, withdraw: false, otherTrans: false})
        
        console.log(checkBoxState)
        
    }



return (
    <div className={styles.checkboxContainer} >
        <div className={styles.header}>
            <span>
                Sort by category
            </span> 
            <span>
                <CloseIcon/>
            </span>
        </div>
        <div className={styles.checkboxWrapper} >
            <FormGroup>
                <FormControlLabel 
                    control={<Checkbox 
                        checked={transactions} 
                        onChange={handleChange} 
                        name="transactions" />
                    } 
                    label={
                        <div  className={styles.iconWrapper}>
                            <img src={transfer2} alt="transfer" />
                            Transactions
                        </div>
                    }
                />
                <FormControlLabel 
                    control={<Checkbox
                        checked={topUp} 
                        onChange={handleChange} 
                        name="topUp" 
                        />
                    }  
                    label={
                        <div  className={styles.iconWrapper}>
                            <img src={topup} alt="topup" />
                            Top up
                        </div>
                    }  
                />
                <FormControlLabel 
                    control={<Checkbox
                        checked={withdraw} 
                        onChange={handleChange} 
                        name="withdraw"
                        />
                    }  
                    label={
                        <div  className={styles.iconWrapper} >
                            <img src={withdraw2} alt="withdraw" />
                            Withdraw
                        </div>
                    }  
                />
                <FormControlLabel 
                    control={<Checkbox
                        checked={otherTrans} 
                        onChange={handleChange} 
                        name="otherTrans"
                        />}  
                    label={
                        <div  className={styles.iconWrapper}>
                            <img src={other} alt="otherTrans" />
                            Other
                        </div>
                    }  
                />
                <Button onClick={clearFilters} >Clear all filters</Button>
                
            </FormGroup>
        </div>
        
    </div>
  )
}

export default SortByCategory