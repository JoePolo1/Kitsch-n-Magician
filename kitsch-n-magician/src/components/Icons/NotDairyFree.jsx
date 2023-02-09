import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCow } from '@fortawesome/free-solid-svg-icons';
import Avatar from '@mui/material/Avatar';


export default function NotDairyFreeIcon() {
  return(
    <>
      Contains Dairy 
      <Avatar sx={{ bgcolor: "#154c79" }} >
        <FontAwesomeIcon icon={faCow} color="#EB5A47" beat />
      </Avatar>
    </>
  )
}
