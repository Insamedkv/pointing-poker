import { Button, Container, Input } from '@material-ui/core';
import { ICardItemProps } from 'defaultTypes';
import React, { FC } from 'react';
import { useStyles } from './CardBack.styles';

export const CardBack: FC<ICardItemProps> = ({ onClick, className }) => {
  const classes = useStyles();

  return (
    <Container className={className}>
      <Input className={classes.input} />
      <Button className={classes.btn} onClick={onClick}>
        Submit
      </Button>
    </Container>
  );
};
