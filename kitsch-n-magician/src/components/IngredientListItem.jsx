import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import DeleteIngredientButton from './Buttons/DeleteIngredientButton';

export default function IngredientListItem(props) {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };




  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List component="nav" >
        <ListItemButton 
        >
          <ListItemIcon sx={{ minWidth: 30}}>
          <FontAwesomeIcon icon={faCube} />
          </ListItemIcon>
          <ListItemText primary={props.name} />
            <DeleteIngredientButton name={props.name} ingredients={props.ingredients} setIngredients={props.setIngredients}/>
          </ListItemButton>
      </List>
    </Box>
  );
}