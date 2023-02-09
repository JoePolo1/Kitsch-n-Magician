import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWheatAwn } from '@fortawesome/free-solid-svg-icons';
import Avatar from '@mui/material/Avatar';


export default function NotGlutenFreeIcon() {
  return(
    <>
      Contains Gluten  
      <Avatar sx={{ bgcolor: "#154c79" }} >
        <FontAwesomeIcon icon={faWheatAwn} color="#EB5A47" beat />
      </Avatar>
    </>
  )
}
