import React, { FC } from 'react';
import { Container } from '@material-ui/core';
import { useStyles } from './AddCardValues.styles';
import { CardForAdd } from './Component';

export const AddCardValues: FC = () => {
  const classes = useStyles();

  return (
    <Container>
      <CardForAdd />
    </Container>
  );
};
