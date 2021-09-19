import { Button, Container, Input } from '@material-ui/core';
import { ICardItemProps } from 'defaultTypes';
import React, { FC, useState } from 'react';
import { useStyles } from './CardBack.styles';

export const CardBack: FC<ICardItemProps> = ({ onClick, className, onSubmit, valueIndex }) => {
  const classes = useStyles();
  const [value, setValue] = useState('');

  return (
    <Container className={className}>
      <Input className={classes.input} onChange={(event) => setValue(event.target.value)} />
      <Button
        className={classes.btn}
        onClick={() => {
          if (onSubmit) onSubmit(valueIndex, value);
        }}
      >
        Submit
      </Button>
    </Container>
  );
};
