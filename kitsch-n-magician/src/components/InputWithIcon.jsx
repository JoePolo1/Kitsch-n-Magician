import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';


export default function InputWithIcon(props) {
  return (
    <Box sx={{
      display: 'flex', 
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      fontFamily: 'orienta',
    }}>
      <FontAwesomeIcon 
        icon={faCirclePlus}
        color="#0F4953"
        sx={{ mr: 4, my: 8}}
        fontSize= '28'
        opacity={.9}
      />
      <form onSubmit={props.onSubmit} >
      <TextField  
      
      id="input-with-sx" 
      label="Add items to your kitchen"
      variant="standard" 
      onChange={props.onChange} 
      value={props.value}
      sx={{
        width: 206,
        fontFamily: 'orienta',
      }}
      />
      </form>
    </Box>
  );
}

