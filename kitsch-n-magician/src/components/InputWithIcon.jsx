import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Icon from '@mui/material/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import RecipeCard from './RecipeCard';
import Sidebarleft from './Sidebarleft';




export default function InputWithIcon(props) {


  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
    <Box sx={{
      display: 'flex', 
      alignItems: 'flex-end',
      justifyContent: 'center'
    }}>
      <FontAwesomeIcon icon={faCirclePlus} color="#154c79" sx={{ mr: 4, my: 8 }} />
      <form onSubmit={props.onSubmit} >
      <TextField  
      id="input-with-sx" 
      label="Add to kitchen" 
      variant="standard" 
      onChange={props.onChange} 
      value={props.value}
      sx={{width: 140}}
      />
      </form>
    </Box>
    </Box>
  );
}

