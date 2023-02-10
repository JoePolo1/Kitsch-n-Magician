import * as React from 'react';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

export default function DeletePantry(props){

  const onClick = (event) => {
    event.preventDefault()
    console.log('clicked')
  }

  return(
    <button onClick={onClick}> <FontAwesomeIcon icon={faTrashCan} color= "#545B85" opacity="0.4" /></button>
  )
}