import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import { Divider } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';


const drawerWidth = 240;

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

export default function MatchedColumn() {
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
            fontSize: '1.2em'}} bgcolor= '#18588c'>
            <header> Household Matches</header></Box>
        <Divider></Divider>
      {/* <FixedSizeList
        height={1020}
        width={250}
        itemSize={46}
        itemCount={16}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList> */}

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
            fontSize: '1.2em'}} >
              <Box sx={{ flexGrow: 0, width: 239, display: 'flex', alignItems: 'left', justifyContent: 'center', flexDirection: 'column', pl: '1em', bgcolor:'#D2E4F7'}}>
                <p>Monday:</p>
              </Box>
              <Box sx={{ flexGrow: 0, width: 239, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <p>Matched Recipe 1</p>
              </Box>
              <Box sx={{ flexGrow: 0, width: 239, display: 'flex', alignItems: 'left', justifyContent: 'center', flexDirection: 'column', pl: '1em', bgcolor:'#D2E4F7'}}>
                <p>Tuesday:</p>
              </Box>
              <Box sx={{ flexGrow: 0, width: 239, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <p>Matched Recipe 2</p>
              </Box>
              <Box sx={{ flexGrow: 0, width: 239, display: 'flex', alignItems: 'left', justifyContent: 'center', flexDirection: 'column', pl: '1em', bgcolor:'#D2E4F7'}}>
                <p>Wednesday:</p>
              </Box>
              <Box sx={{ flexGrow: 0, width: 239, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <p>Matched Recipe 3</p>
              </Box>
              <Box sx={{ flexGrow: 0, width: 239, display: 'flex', alignItems: 'left', justifyContent: 'center', flexDirection: 'column', pl: '1em', bgcolor:'#D2E4F7'}}>
                <p>Thursday:</p>
              </Box>
              <Box sx={{ flexGrow: 0, width: 239, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <p>Keep matching to fill!</p>
              </Box>
              <Box sx={{ flexGrow: 0, width: 239, display: 'flex', alignItems: 'left', justifyContent: 'center', flexDirection: 'column', pl: '1em', bgcolor:'#D2E4F7'}}>
                <p>Friday:</p>
              </Box>
              <Box sx={{ flexGrow: 0, width: 239, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <p>Keep matching to fill!</p>
              </Box>
              <Box sx={{ flexGrow: 0, width: 239, display: 'flex', alignItems: 'left', justifyContent: 'center', flexDirection: 'column', pl: '1em', bgcolor:'#D2E4F7'}}>
                <p>Saturday:</p>
              </Box>
              <Box sx={{ flexGrow: 0, width: 239, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <p>Keep matching to fill!</p>
              </Box>
              <Box sx={{ flexGrow: 0, width: 239, display: 'flex', alignItems: 'left', justifyContent: 'center', flexDirection: 'column', pl: '1em', bgcolor:'#D2E4F7'}}>
                <p>Sunday:</p>
              </Box>
              <Box sx={{ flexGrow: 0, width: 239, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <p>Keep matching to fill!</p>
              </Box>
            </Box>
          </Drawer>

        </List>
      
    </Box>
    </Drawer>
    </>
  );
}