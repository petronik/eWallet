import { useSelector } from 'react-redux';
import styles from '../stylesOverview/TotalBalanceBox.module.scss'


 const MeterBar = () => {
   const payments = useSelector((state) => state.summary.payment_made)
  const limit = 15000;
  let val = Math.round(payments / (limit / 100)) 

  return (
    <div className={styles.meterBar}>
      <label htmlFor="meterBar">Online payments limit for the month </label>
        <meter value={'0.' + ( val < 10 ? '0'+ val : val)}></meter>
      <span>{`${Math.round(payments.toLocaleString('en-US'))} out of ${limit.toLocaleString('en-US')} left`}</span>
    </div>
  )
}

export default MeterBar
