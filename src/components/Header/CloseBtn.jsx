import React from 'react'
import CloseIcon from '@mui/icons-material/Close';


const CloseBtn = ({toggle, isOpen}) => {
  return (
    <div onClick={toggle}> <CloseIcon fontSize="large"/> </div>
  )
}

export default CloseBtn