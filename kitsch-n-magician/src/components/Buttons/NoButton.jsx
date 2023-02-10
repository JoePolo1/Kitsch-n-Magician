import * as React from 'react';
import Button from '@mui/material/Button';

export default function NoButton(props) {
  return(
    <Button variant="contained" sx={{color:"#EB5A47", fontWeight:900, bgcolor: "#154c79"}} onClick={props.handleChange} checked={props.checked} >
        NOPE
    </Button>
  )
}

