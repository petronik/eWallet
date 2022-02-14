import React from 'react';
import {Outlet} from 'react-router-dom';
import { Button } from '@mui/material';
import styles from './Transfers.module.scss'
import SideNav from './SideNav';
// import TopUpSuccess from './TopUpSuccess'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#fff',
      contrastText: '#fff',
    },
  },
});

const Transfers = () => {


  return (
    <section className={styles.sectionTransfer}>
      <div className={styles.left}>
      <SideNav/>
      </div>
      <div className={styles.middle}>
        <Outlet/>
      </div>
      <div className={styles.right}>
        <h3>Read the latest news <br/> on the system update  </h3>
        <ThemeProvider theme={theme}>
          <Button
            variant='outlined'
            color="neutral"
          >
            Read nore
          </Button>
        </ThemeProvider>

      </div>
    </section>
  );
};

export default Transfers;