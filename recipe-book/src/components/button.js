import * as React from 'react';
import Button from '@mui/material/Button';

const BasicButtons = (props) => {
  return (
      <Button color={props.color} variant={props.variant}>{props.text}</Button>
  );
}

export default BasicButtons;
