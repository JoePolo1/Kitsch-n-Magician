import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function SearchButton() {
  return (
    <Stack direction="row" spacing={2}>
      <Button 
        variant="contained" 
        onClick={() => {alert('clicked');}}
        >
        Search Recipes
      </Button>
    </Stack>
  );
}


{/* <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button> */}