import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import IssueCard from 'components/IssueCard';
import IssueList from 'components/IssueList';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { createIssueModal } from 'reduxstore/modalSlice/modalSlice';
import { useStyles } from './IssueCreation.styles';

const IssueCreation: React.FC = () => {
  const issues = useTypedSelector((state) => state.issues);
  const classes = useStyles();
  const dispatch = useDispatch();

  const addIssue = () => {
    dispatch(createIssueModal());
  };

  return (
    <Container className={classes.root}>
      <Grid container spacing={1}>
        <IssueList issues={issues} />
        <Grid item sm={6}>
          <div onClick={addIssue}>
            <IssueCard mode="create" />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default IssueCreation;
