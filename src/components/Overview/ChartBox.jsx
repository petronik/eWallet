import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import summarySlice from '../../features/infirmationSummary/summarySlice';
import axios from '../../api/axios';
import styles from './stylesOverview/ChartBox.module.scss'
import filter from '../../assets/img/filter.svg'
import datePicker from '../../assets/img/calendar.svg'

ChartJS.register(ArcElement, Tooltip, Legend);

const SUMMARY_URL = '/information/summary';

const options = {
  plugins: {
    legend: {
      display: true,
    }
  }
}
const ChartBox = () => {
  const dispatch = useDispatch();
  const startDate = '2022-02-19';
  const endDate = '2022-02-20';
  const currency = 'usd'
  const summary = useSelector((state) => 
    state.summary.summary
  )
  const data = {
    labels: ['Withdraw', 'Transfers', 'Fills'],
    datasets: [
      {
        data: [
                `${summary.payment_withdraw}`,
                `${summary.payment_made}`,
                `${summary.payment_fill}`,
              ],
        backgroundColor: [
          'rgba(0, 0, 0, 0.8)',
          'rgba(112,133,255, 1)',
          'rgba(0, 255, 55,1)'
        ],
        borderWidth: 2,
      }
    ]
  };

const getChartData = async () => {
  const res = await axios.get(
    SUMMARY_URL,
    {
      params: {start_date: `${startDate}`, end_date: `${endDate}`, currency: `${currency}`
      },
      headers: {
        'Authorization' :'Bearer ' + localStorage.getItem('token')
      }
    }
  );
  console.log(summary)
  dispatch(summarySlice.actions.setSummary(res.data))
}
useEffect(() => {
  getChartData()
}, [])

  return (
    <section className={styles.chartContainerWrap}>
      <div className={styles.chartContainer}>
        <div className={styles.header}>
          <h3>Chart</h3>
          <div className={styles.header_filter}>
            <img src={filter} alt="Filter icon" />
            <img src={datePicker} alt="Date Picker icon" />
          </div>
        </div>
        <div className={styles.chartWrapper}>
          <div className={styles.chartDoughnut}>
            <Doughnut 
              data={data} 
              options={options} 
            />
          </div>
          <div className={styles.chartData}>
            <div className={styles.chartDateRange}>JANUARY 2021 - OCTOBER 2021</div>
            <p>445</p>
            <span>43%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartBox;