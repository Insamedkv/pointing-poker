import { Card, IconButton } from '@material-ui/core';
import React, { FC } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useStyles } from './CardForAdd.styles';

export const CardForAdd: FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.cardStyles}>
      <IconButton className={classes.btn}>
        <AddCircleIcon className={classes.cardIcon} />
      </IconButton>
    </Card>
  );
};
