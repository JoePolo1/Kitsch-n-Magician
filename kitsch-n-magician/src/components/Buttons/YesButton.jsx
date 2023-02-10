import * as React from 'react';
import Button from '@mui/material/Button';


export default function YesButton(props) {
  return(
    <Button variant="contained" sx={{color:"#96EB78", fontWeight:900, bgcolor: "#154c79"}} onClick={props.handleChange} checked={props.checked} >
        YES!
    </Button>
  )
}
