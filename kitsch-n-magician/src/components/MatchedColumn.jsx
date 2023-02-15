import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Divider } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import DayofTheWeek from './DayofTheWeek';





const drawerWidth = 240;

// Need to feed in props of recipe title and recipe URL to matchedURL for  below in order to render matched recipes

// const dayOfWeek = ["Monday:", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// let matchedRecipe = [{
//     recipeTitle: "",
//     recipeUrl: props.
//   },

//   {

// }]


function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}

export default function MatchedColumn(props) {
  return (
    <>
    <Divider orientation="vertical" flexItem />
    <AppBar 
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >

      </AppBar>

      <Drawer
        sx={{
          display: 'flex',
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            mt: '4.3em',
            width: drawerWidth,
            boxSizing: 'border-box',
            maxHeight: '100%'
          }
        }}
        variant="permanent"
        anchor="right"
      >


    <Box
      sx={{ 
        width: '100%', 
        height: '100%', 
        maxWidth: 250, 
        bgcolor: 'background.paper'
      }}
    >
      
        <Box sx={{ flexGrow: 0, 
            width: 239, 
            height: '3.5em', 
            color: "#FFFFFF",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2em'}} bgcolor= '#F98E6E'>
            <header> Household Matches</header></Box>
        <Divider></Divider>

        <List>
          <Drawer
            sx={{
              display: 'flex',

              flexShrink: 0,
              '& .MuiDrawer-paper': {
                mt: '8em',

                boxSizing: 'border-box',
                maxHeight: '80%'
              }
            }}
            variant="permanent"
            anchor="right"
          >
          <Box sx={{ flexGrow: 0, 
            width: 239, 
            display: 'flex',
            alignItems: 'left',
            justifyContent: 'center',
            flexDirection: 'column',
            fontSize: '1.2em'
            }} >
              
              <DayofTheWeek 
              day={props.day}/>

              

            </Box>
          </Drawer>

        </List>
      
    </Box>
    </Drawer>
    </>
  );
}