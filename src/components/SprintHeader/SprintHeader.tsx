import React from 'react';
import { Container, IconButton, Typography } from '@material-ui/core';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { IIssue } from 'defaultTypes';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useStyles } from './SprintHeader.styles';

const SprintHeader: React.FC = () => {
  const classes = useStyles();
  const title = useTypedSelector((state) => state.currentUser.room?.roomTitle);

  const editTitle = () => {};

  return (
    <>
      <Container className={classes.container}>
        <Typography variant="h3" className={classes.root}>
          {title}
        </Typography>
        <IconButton aria-label="edit" className={classes.editButton} size="small">
          <EditOutlinedIcon className={classes.editButton} />
        </IconButton>
      </Container>
    </>
  );
};

export default SprintHeader;
