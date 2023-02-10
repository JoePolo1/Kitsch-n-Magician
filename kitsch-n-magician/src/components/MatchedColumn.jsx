import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import { Divider } from '@mui/material';
import AppBar from '@mui/material/AppBar';


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
    <Box
      sx={{ 
        mt: '4.3em',
        width: '100%', 
        height: '100%', 
        maxWidth: 250, 
        bgcolor: 'background.paper' 
      }}
    >
      <Box sx={{
        pl: '2.8em',
        pt: '.8em',
        pb: '0.6em',
        fontWeight: 800        
      }}>
        Household Matches</Box>
        <Divider></Divider>
      <FixedSizeList
        height={1020}
        width={250}
        itemSize={46}
        itemCount={16}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
    </>
  );
}