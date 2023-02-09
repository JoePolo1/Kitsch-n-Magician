import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import Avatar from '@mui/material/Avatar';


export default function VeganIcon() {
  return(
    <>
      Vegan 
      <Avatar sx={{ bgcolor: "#154c79" }} >
        <FontAwesomeIcon icon={faSeedling} color="#96EB78" />
      </Avatar>
    </>
  )
}

