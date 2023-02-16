import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import DeleteFavRecipeButton from './Buttons/DeleteFavRecipeButton';

export default function IngredientListItem(props) {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  // const mappedTitles = props.response.map(title => {
  //   return (
  //     <FavouritesListItem 
  //     name
  //     /> 
  //   )  })

  return (
    <Box sx={{
      width: '100%',
      maxWidth: 230,
      bgcolor: "#caf4da",
      borderRadius: '25px',
      mt: "0.25em",
      ml: "0.25em",
      mr: "0.25em",
      boxShadow: 6,
      borderBottom: '2px solid #4E5755',
      borderRight: '2px solid #4E5755',
      fontFamily: 'orienta',
    }}
      onClick={props.onClick}>
      <ListItemButton
      >
        <ListItemIcon sx={{ minWidth: 30 }} >
          <FontAwesomeIcon icon={faBook} />
        </ListItemIcon>
        <ListItemText
          disableTypography={true}
          sx={{
            fontFamily: 'orienta',
          }} primary={props.title} />
        <DeleteFavRecipeButton
          favTitle={props.title}
          recipeId={props.recipeId}
          setRecipeFavs={props.setRecipeFavs}
          setSelectedrecipe={props.setSelectedrecipe}
        />
      </ListItemButton>
    </Box>
  );
}