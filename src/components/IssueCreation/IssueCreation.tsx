import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import IssueCard from 'components/IssueCard';
import IssueList from 'components/IssueList';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { createIssueModal } from 'reduxstore/modalSlice/modalSlice';
import { IssueResp } from 'services/serviceTypes';
import { setIssues } from 'reduxstore/issuesSlice';
import { getRoomIssues } from 'services/httpRoom';
import { useStyles } from './IssueCreation.styles';
import { socket } from '../../index';

const IssueCreation: React.FC = () => {
  const { room } = useTypedSelector((state) => state.currentUser);
  const classes = useStyles();
  const dispatch = useDispatch();

  const [issuesList, setIssuesList] = useState<Array<IssueResp>>([]);

  useEffect(() => {
    socket.getIssues(setIssuesList);
    if (room?._id)
      getRoomIssues(room._id).then((data) => {
        setIssuesList(data);
      });
  }, [room]);

  useEffect(() => {
    dispatch(setIssues(issuesList));
  }, [issuesList]);

  const addIssue = () => {
    dispatch(createIssueModal());
  };

  return (
    <Container className={classes.root}>
      <Grid container spacing={1}>
        <IssueList issues={issuesList} />
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
