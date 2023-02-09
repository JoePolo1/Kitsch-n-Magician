import * as React from 'react';
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

export default function DeleteFavRecipeButton(props) {
  return(
    <Button sx={{ minWidth: 0}} >
      <FontAwesomeIcon icon={faTrashCan} color= "#545B85" opacity="0.4" />
    </Button>
  )

}