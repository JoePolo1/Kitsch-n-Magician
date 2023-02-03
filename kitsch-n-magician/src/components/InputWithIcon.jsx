import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Icon from '@mui/material/Icon';
import { green } from '@mui/material/colors';
import AddIcon from './AddIcon';


export default function InputWithIcon() {
  return (
    <div>
      <AddIcon />
      <TextField id="input-with-sx" label="Add to kitchen" variant="standard" />
    </div>
  );
}