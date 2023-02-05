import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function TryRecipeButton(props) {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" href={props.spoonacularSourceUrl} target="_blank" >
        Try This Recipe
      </Button>
    </Stack>
  );
}