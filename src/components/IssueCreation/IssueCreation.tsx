import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import { setIssues } from 'reduxstore/issuesSlice';
import IssueCard from 'components/IssueCard';
import IssueList from 'components/IssueList';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { getRoomIssues } from 'services/httpRoom';
import { useStyles } from './IssueCreation.styles';
import { socket } from '../../index';

const IssueCreation: React.FC = () => {
  const { room } = useTypedSelector((state) => state.currentUser);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (room?._id)
      getRoomIssues(room._id).then((data) => {
        dispatch(setIssues(data));
      });
  }, [room]);

  useEffect(() => {
    socket.getIssues(dispatch);
  }, []);

  return (
    <Container>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs>
          <IssueCard mode="create" />
        </Grid>
        <IssueList />
      </Grid>
    </Container>
  );
};

export default IssueCreation;
