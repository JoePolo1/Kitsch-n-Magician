import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import DeletePantryButton from './Buttons/DeletePantryButton'

export default function PantryListItem(props) {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };


  return (
    <Box sx={{ width: '100%', maxWidth: 215, bgcolor: "#caf4da", borderRadius: '25px', mt: "0.25em", ml: "0.25em", mr: "0.25em", boxShadow: 6, borderBottom: '2px solid #4E5755', borderRight: '2px solid #4E5755',  }}>
        <ListItemButton 
        >
          <ListItemIcon sx={{ minWidth: 30}}>
          <FontAwesomeIcon icon={faCube} />
          </ListItemIcon>
          <ListItemText disableTypography='true' primary={props.name} />
            <DeletePantryButton
              userId={props.userId}
              name={props.name}
              setIngredients={props.setIngredients}
            />
          </ListItemButton>
    </Box>
  );
}