import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWheatAwn } from '@fortawesome/free-solid-svg-icons';
import Avatar from '@mui/material/Avatar';


export default function GlutenFreeIcon() {
  return(
    <>
      Gluten Free 
      <Avatar sx={{ bgcolor: "#154c79" }} >
        <FontAwesomeIcon icon={faWheatAwn} color="#96EB78" />
      </Avatar>
    </>
  )
}

