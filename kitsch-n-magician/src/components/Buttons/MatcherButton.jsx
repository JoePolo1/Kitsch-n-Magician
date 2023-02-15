import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function MatcherButton(props) {
  return (
    <Stack direction="row" spacing={2}>
      <Button 
        variant="contained" 
        onClick={props.onClick}
        sx={{bgcolor: "#0f4953", }}
        >
        Find a Match
      </Button>
    </Stack>
  );
}
