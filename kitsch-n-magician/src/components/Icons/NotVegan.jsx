import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import Avatar from '@mui/material/Avatar';


export default function NotVegan() {
  return(
    <>
      Not Vegan 
      <Avatar sx={{ bgcolor: "#154c79" }} >
        <FontAwesomeIcon icon={faSeedling} color="#EB5A47" beat />
      </Avatar>
    </>
  )
}
