import { useSelector } from 'react-redux';
import styles from '../stylesOverview/TotalBalanceBox.module.scss'


 const MeterBar = () => {
   const balance = useSelector((state) => state.balance.balance)
  const limit = 15000;
  let width = Math.round(balance / (limit/100))

  return (
    <div className={styles.meterBar}>
      <label htmlFor="meterBar">Online payments limit for the month </label>
      <div className={styles.meter} >
        <span style={{width : `${width}%`}} className={styles.meterProgress}
        > </span>
      </div>
      <span>{`${Math.round(limit - balance)} out of ${limit} left`}</span>
    </div>
  )
}

export default MeterBar
