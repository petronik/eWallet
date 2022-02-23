import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from '../../api/axios'
import allTransactionsSlice from '../../features/allTransactions/allTransactions';
import FilterListIcon from '@mui/icons-material/FilterList';
import CategoryIcon from '@mui/icons-material/Category';
import DateRangeIcon from '@mui/icons-material/DateRange';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import BarChartIcon from '@mui/icons-material/BarChart';
import Transaction from './Transaction';

import SortByCategory from './SortByCategory/SortByCategory'
import styles from './Archive.module.scss'

const ALL_TRANSACTIONS_URL = '/transactions';


const Archive = () => {
  const dispatch = useDispatch();
  const startDate = '2022-01-01';
  const endDate = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`;
  const transactions = useSelector((state) => state.allTransactions.allTransactions)

  const fetchAlltTransactions = async () => {
    const res = await axios.get(
      ALL_TRANSACTIONS_URL,
      {
        params: {start_date: `${startDate}`, end_date: `${endDate}`
        },
        headers: {
          'Authorization' :'Bearer ' + localStorage.getItem('token')
        }
      }
    );
    dispatch(allTransactionsSlice.actions.setAllTransactions(res.data.transactions))
    return res
  }
  useEffect(() => {
    fetchAlltTransactions()
  }, []);


  const [ showItem, setShowItem] = useState(false);

  return (
    <div className={styles.wrapperArcive} >
      <div className={styles.headerArchive} >
        <div> 
          <div  >
            <ArrowBackTwoToneIcon />
          </div> 
          Archive transactions
        </div>
        <nav>
          <div className={styles.searchBox}>
          <span>
            <SearchIcon sx={{
              color: '#1B2B41',
              width: '20px',
              marginLeft: '5px',
              marginTop: '5px',
            }} />
          </span>
          <input 
            type="search" 
            name="archiveSearch" 
            placeholder='Search'
          />
          </div>
          <div className={styles.buttonBox}  >
            <span>Filter by</span>
            <div>
              <button  >
                <FilterListIcon/>
              </button>
            </div>
            <div >
              <button onClick={()=> setShowItem(!showItem)} >
                <CategoryIcon/>
              </button>
              { showItem && <SortByCategory/>}
            </div>
            <div>
              <button>
                <DateRangeIcon/>
              </button>
            </div>
            <div>
              <button>
                <BarChartIcon/>
              </button>
            </div>
          </div>
        </nav>
      </div>
      <div className={styles.archiveList} >
        {transactions?.map((transaction, index) => (
            <Transaction key={index} transaction={transaction} />
          ))
        }
      </div>
      
    </div>
  );
};

export default Archive;