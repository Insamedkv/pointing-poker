import React from 'react';
import { Button, Input } from '@material-ui/core';
import { useStyles } from './CustomInput.styles';

const CustomInput: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Input className={classes.root} />
      <Button variant="contained" color="primary" size="small">
        Copy
      </Button>
    </>
  );
};

export default CustomInput;
