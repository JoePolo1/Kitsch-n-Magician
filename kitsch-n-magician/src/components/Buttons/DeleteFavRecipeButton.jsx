import * as React from 'react';
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import useToken from '../../hooks/useToken';


export default function DeleteFavRecipeButton(props) {

  const getToken = useToken().getToken()

  const deleteFunc = function () {
    axios.post('/deleteFav', {
      userId: getToken,
      recipeId: props.recipeId
    }) .then(() => {
      props.setRecipeFavs((prev) => {
      return [...prev.filter((item) => {
        return (props.recipeId !== item.id)
      })]})
      props.setSelectedrecipe(null)
    })
  }  


  return(
    <Button sx={{ minWidth: 0}}  onClick={deleteFunc} >
      <FontAwesomeIcon icon={faTrashCan} color= "#545B85" opacity="0.4" />
    </Button>
  )

}