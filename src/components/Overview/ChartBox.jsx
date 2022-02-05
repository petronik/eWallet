import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import styles from './stylesOverview/ChartBox.module.scss'
import filter from '../../assets/img/filter.svg'
import datePicker from '../../assets/img/calendar.svg'
import SendIcon from '../../assets/img/sendMoney2.png' 

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Black', 'Purple'],
  datasets: [
    {
      data: [30, 17],
      
      backgroundColor: [
        'rgba(0, 0, 0, 0.8)',
        'rgba(112,133,255, 1)',
      ],
      
      borderWidth: 0,

    }
  ]
};

const options = {
  plugins: {
    legend: {
      display: false,
    }
  }
}

const ChartBox = () => {
  return (
    <div className={styles.chartContainerWrap}>
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
            <Doughnut data={data} options={options} />
            <span>
            <img src={SendIcon} alt="Send Icon" />
            <br />
            </span>
          </div>
          <div className={styles.chartData}>
            <div className={styles.chartDateRange}>JANUARY 2021 - OCTOBER 2021</div>
            <p>-$567.44</p>
            <span>43%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;