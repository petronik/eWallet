import React from 'react'
import CloseIcon from '@mui/icons-material/Close';


const CloseBtn = ({toggle, isOpen}) => {
  return (
    <span onClick={toggle}> <CloseIcon fontSize="large"/> </span>
  )
}

export default CloseBtn