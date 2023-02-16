import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function SearchButton(props) {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        onClick={props.onClick}
        sx={{
          bgcolor: "#0F4953",
          fontSize: '1.2em',
          fontFamily: 'orienta',
        }}
      >
        Search Recipes
      </Button>
    </Stack>
  );
}
