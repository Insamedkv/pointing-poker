import { Card, IconButton } from '@material-ui/core';
import React, { FC, useState } from 'react';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useStyles } from './CardForAdd.styles';

export const CardForAdd: FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.cardStyles}>
      <IconButton>
        <AddCircleOutlineIcon />
      </IconButton>
    </Card>
  );
};
