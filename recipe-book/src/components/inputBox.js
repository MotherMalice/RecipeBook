import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// taken from https://mui.com/material-ui/react-text-field/ and edited.

const BasicTextFields = (props) => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label={props.label} variant="outlined" />
    </Box>
  );
}

export default BasicTextFields;