import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const Burger = ({toggle, isOpen}) => {
  return (
    <div onClick={toggle} ><MenuIcon fontSize="large" /></div>
  )
}

export default Burger