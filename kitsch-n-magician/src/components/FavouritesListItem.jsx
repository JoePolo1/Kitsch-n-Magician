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
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}         onClick={props.onClick}>
      <List component="nav" >
        <ListItemButton 
        >
          <ListItemIcon sx={{ minWidth: 30}} >
          <FontAwesomeIcon icon={faBook} />
          </ListItemIcon>
            <ListItemText primary={props.title}  />
              <DeleteFavRecipeButton 
              favTitle={props.title} 
              recipeId={props.recipeId} 
              setRecipeFavs={props.setRecipeFavs}
              setSelectedrecipe={props.setSelectedrecipe}
              />
        </ListItemButton>
      </List>
    </Box>
  );
}