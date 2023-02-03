import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Icon from '@mui/material/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'


export default function InputWithIcon() {
  return (
    <Box>
      <FontAwesomeIcon icon={faCirclePlus} />
      <TextField  id="input-with-sx" label="Add to kitchen" variant="standard" />
    </Box>
  );
}

