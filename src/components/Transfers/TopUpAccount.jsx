import React from 'react'
import styles from './Transfers.module.scss'

const TopUpAccount = () => {
  return (
    <div className={styles.topUpAccount}>
       <div>Top up account <span>O</span> </div> 
       <p>Amount</p>
      <form >
        <label htmlFor="transferAmount">Enter the amount</label>
        <input 
        type="text" 
        id='transferAmount' 
        placeholder='0.00$'
        required
        autoComplete='off'
        />
        <button >Top up</button>
        <span>Cancel</span>
      </form>
    </div>
  )
}

export default TopUpAccount