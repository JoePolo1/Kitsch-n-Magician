import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Box from '@mui/material/Box';
import { useState } from 'react';



export default function DayofTheWeek(props) {

  // Defaults to "Keep playing to fill recipes" until a match is found
  const [matchFound, setmatchFound] = useState(true)

  return (
    <Box sx={{ flexGrow: 0, 
      width: 239, 
      display: 'flex',
      alignItems: 'left',
      justifyContent: 'center',
      flexDirection: 'column'}} >
        <Box sx={{ flexGrow: 0, width: 239, display: 'flex', alignItems: 'left', justifyContent: 'center', flexDirection: 'column', pl: '1em', bgcolor:'#D2E4F7'}}>
          <p>{props.day}:</p>
        </Box>

        {matchFound ? 
          <Box sx={{ flexGrow: 0, width: 239, display: 'flex', alignItems: 'center', minHeight: '3.5em', justifyContent: 'center', flexDirection: 'column'}}>
            <a href={props.spoon_url} target="_blank">{props.title}</a>
          </Box>
        :
          <Box sx={{ flexGrow: 0, width: 239, display: 'flex', alignItems: 'center', height: '3.5em', justifyContent: 'center', flexDirection: 'column'}}>
            <p>Keep playing to match!</p>
          </Box>
        }
        
        
      </Box>
  )
}
