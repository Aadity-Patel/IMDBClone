import { Button } from '@mui/material';
import React from 'react'


const CustomButton = ({buttonText, onClickTask}) => {
  return (
    <div>
      <Button variant='contained' onClick={onClickTask}>{buttonText}</Button>
    </div>
  );
}

export default CustomButton
