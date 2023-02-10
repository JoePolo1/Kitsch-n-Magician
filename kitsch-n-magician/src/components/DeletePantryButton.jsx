import * as React from 'react';
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'

export default function DeletePantryButton(props) {

  const handleDelete = function(event){
    event.preventDefault()
  
    console.log('value is', props.name)
  
    axios.post('/deletePantryItems', {
      userId: props.userId,
      ingredientId: props.name
    }).then(() => {
      props.setIngredients((prev) => {
        return [...prev.filter((item) => {
          return (props.name !== item.name)
        })]
      })
     
    }).catch((error) => {
      return error
    })
  }
  return(
    <Button sx={{ minWidth: 0}} onClick={handleDelete} >
      <FontAwesomeIcon icon={faTrashCan} color= "#545B85" opacity="0.4" />
    </Button>
  )

}