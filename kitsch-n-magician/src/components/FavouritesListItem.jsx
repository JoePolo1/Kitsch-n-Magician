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
import { faCube, faTrashCan, faBook } from '@fortawesome/free-solid-svg-icons';

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
          <ListItemIcon>
          <FontAwesomeIcon icon={faBook} />
          </ListItemIcon>
          <ListItemText primary={props.title}  />
          <FontAwesomeIcon icon={faTrashCan} color= "#545B85" opacity="0.4" />
        </ListItemButton>
      </List>
    </Box>
  );
}