import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Card, IconButton } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { ICardItemProps, ScoreTypes } from 'defaultTypes';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { generateNextValue } from 'reduxstore/settingsSlice/settingsSlice';
import { useStyles } from './CardForAdd.styles';

export const CardForAdd: FC<ICardItemProps> = ({ onClick, className }) => {
  const classes = useStyles();
  const scoreType = useTypedSelector((state) => state.settings.scoreType);
  const dispatch = useDispatch();

  const addCardWithValue = (event: React.MouseEvent) => {
    if (onClick && scoreType === ScoreTypes.CUSTOM) {
      onClick(event);
      return;
    }
    dispatch(generateNextValue());
  };

  return (
    <Card className={className} onClick={addCardWithValue}>
      <IconButton className={classes.btn}>
        <AddCircleIcon className={classes.cardIcon} />
      </IconButton>
    </Card>
  );
};
