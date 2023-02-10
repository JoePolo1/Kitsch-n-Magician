import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCow } from '@fortawesome/free-solid-svg-icons';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/system';


export default function NotDairyFreeIcon() {
  return(
    <>
    <Box sx={{
            pr: "5px",
            alignItems: "center",
            display: 'flex'
          }}>
      Contains Dairy </Box>
      <Avatar sx={{ bgcolor: "#154c79" }} >
        <FontAwesomeIcon icon={faCow} color="#EB5A47" beat />
      </Avatar>
    </>
  )
}
