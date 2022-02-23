import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const Burger = ({toggle, isOpen}) => {
  return (
    <span onClick={toggle} ><MenuIcon fontSize="large" /></span>
  )
}

export default Burger