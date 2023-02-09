import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/system';


export default function VeganIcon() {
  return(
    <>
      <Box sx={{
            pr: "5px",
            alignItems: "center",
            display: 'flex'
          }}>Vegan </Box>
      <Avatar sx={{ bgcolor: "#154c79" }} >
        <FontAwesomeIcon icon={faSeedling} color="#96EB78" />
      </Avatar>
    </>
  )
}

