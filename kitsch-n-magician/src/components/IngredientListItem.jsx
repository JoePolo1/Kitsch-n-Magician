import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import DeleteIngredientButton from "./Buttons/DeleteIngredientButton";
import { borderColor } from "@mui/system";

// Renders individual ingredients on left side bar
export default function IngredientListItem(props) {
  return (
    <Box sx={{ 
      width: "100%", 
      maxWidth: 215, 
      bgcolor: "#caf4da", 
      borderRadius: '25px', 
      mt: "0.25em", 
      ml: "0.25em", 
      mr: "0.25em", 
      boxShadow: 6, 
      borderBottom: '2px solid #4E5755', 
      borderRight: '2px solid #4E5755',
      }}>

        <ListItemButton>
          <ListItemIcon sx={{ minWidth: 30 }}>
            <FontAwesomeIcon icon={faCube} />
          </ListItemIcon>
          <ListItemText disableTypography='True' primary={props.name} />
          <DeleteIngredientButton
            name={props.name}
            ingredients={props.ingredients}
            setIngredients={props.setIngredients}
          />
        </ListItemButton>

    </Box>
  );
}
