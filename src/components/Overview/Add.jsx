import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material';
import styles from './Overview.module.scss'

const ReadMoreButton = styled(Button)({
  padding: '10px 34px', 
  marginBottom: '124px',
})


const Add = () => {
  return (
    <div className={styles.addon}>
      <h2>
      Get exclusive discounts for any <br/> payment method
      </h2>
      <p>by making your first purchase</p>
      <ReadMoreButton
        variant='contained'
      >
        Read more
      </ReadMoreButton>
    </div>
  );
};

export default Add;