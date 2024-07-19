import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// Taken from https://mui.com/material-ui/react-text-field/ and edited.

const MultilineTextFields = ({label, placeholder, name, value, onChange}) => {
  const handleChange = (e) =>{
    onChange(e);
  }
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          value={value}
          name={name}
          id="outlined-textarea-static"
          label={label}
          placeholder={placeholder}
          onChange={handleChange}
          multiline
        />
      </div>
    </Box>
  );
}

export default MultilineTextFields;