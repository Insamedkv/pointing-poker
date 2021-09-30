import { Card, IconButton } from '@material-ui/core';
import React, { FC } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { ICardItemProps } from 'defaultTypes';
import { useStyles } from './CardForAdd.styles';

export const CardForAdd: FC<ICardItemProps> = ({ onClick, className }) => {
  const classes = useStyles();

  return (
    <Card className={className} onClick={onClick}>
      <IconButton className={classes.btn}>
        <AddCircleIcon className={classes.cardIcon} />
      </IconButton>
    </Card>
  );
};
