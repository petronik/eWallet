import React from 'react';


import FilterListIcon from '@mui/icons-material/FilterList';
import CategoryIcon from '@mui/icons-material/Category';
import DateRangeIcon from '@mui/icons-material/DateRange';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import BarChartIcon from '@mui/icons-material/BarChart';
import Button  from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import styles from './Archive.module.scss'
const Archive = () => {

    const NavButton = styled(Button)({
      background: '#eee',
      fontSize:'10px',
      color: '#727e8c',
      size: 'small',
    })

  return (
    <div className={styles.wrapperArcive} >
      <div className={styles.headerArchive} >
        <span> 
          <span>
            <ArrowBackTwoToneIcon />
          </span> 
          Archive transactions
          </span>
        <nav>
          <Stack direction="row" spacing={2} >
          <TextField
            label="Search"
            type="search"
            variant="filled"
            size='small'
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <NavButton >
            <FilterListIcon />
          </NavButton>
          <NavButton >
            <CategoryIcon />
          </NavButton>
          <NavButton  >
            <DateRangeIcon />
          </NavButton>
          <NavButton >
            <BarChartIcon />
          </NavButton>
          </Stack>
        </nav>
      </div>
      <div className={styles.archiveList} ></div>
    </div>
  );
};

export default Archive;