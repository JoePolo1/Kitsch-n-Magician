import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCow } from '@fortawesome/free-solid-svg-icons';
import Avatar from '@mui/material/Avatar';


export default function DairyFreeIcon() {
  return(
    <>
      Dairy Free 
      <Avatar sx={{ bgcolor: "#154c79" }} >
        <FontAwesomeIcon icon={faCow} color="#96EB78" />
      </Avatar>
    </>
  )
}
