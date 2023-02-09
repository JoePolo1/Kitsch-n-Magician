import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import Avatar from '@mui/material/Avatar';


export default function NotVegetarianIcon() {
  return(
    <>
      Not Vegetarian 
      <Avatar sx={{ bgcolor: "#154c79" }} >
        <FontAwesomeIcon icon={faLeaf} color="#EB5A47" beat />
      </Avatar>
    </>
  )
}