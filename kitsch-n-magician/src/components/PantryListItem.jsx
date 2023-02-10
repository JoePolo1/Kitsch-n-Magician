import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@mui/material';
import DeleteIngredientButton from './DeleteIngredientButton';
import DeletePantryButton from './DeletePantryButton'

export default function PantryListItem(props) {
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
            <DeletePantryButton
             userId={props.userId}
             name={props.name}
             setIngredients={props.setIngredients}
             />
          </ListItemButton>
      </List>
    </Box>
  );
}