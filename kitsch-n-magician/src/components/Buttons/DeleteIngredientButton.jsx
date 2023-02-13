import * as React from 'react';
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import useToken from '../../hooks/useToken';

export default function DeleteIngredientButton(props) {

  const getToken = useToken().getToken()

  const handleListItemDelete = (event) => {
    event.preventDefault()
    axios.post('/deleteIngredForUser', {
      userId: getToken,
      ingredientName: props.name
    })
    .then(() => {
      props.setIngredients((prev) => {
        return [...prev.filter((item) => {
          return (props.name !== item)
        }
      )]
    })
  })
  .catch((err) => console.log(err))
}

  return(
    <Button sx={{ minWidth: 0}} onClick={handleListItemDelete} >
      <FontAwesomeIcon icon={faTrashCan} color= "#545B85" opacity="0.4" />
    </Button>
  )

}