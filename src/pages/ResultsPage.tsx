import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import SprintHeader from 'components/SprintHeader';
import { Button, Container, Grid } from '@material-ui/core';
import { useTypedSelector } from 'hooks/useTypedSelector';
import IssueCard from 'components/IssueCard';
import { downloadResults, getRoomBets } from 'services/httpRoom';
import { setUsersBets } from 'reduxstore/gameSlice';
import Statistic from 'components/Statistic';
import CreateStatistic from 'components/CreateStatistic/CreateStatistic';
import { Bet, IssueResp } from 'services/serviceTypes';
import { IIssue } from 'defaultTypes';
import { useStyles } from './ResultsPage.styles';

const ResultsPage: React.FC = () => {
  const classes = useStyles();
  const issues = useTypedSelector((state) => state.issues);
  const roomId = useTypedSelector((state) => state.currentUser.room?._id);

  const download = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (roomId) downloadResults(roomId);
  };

  return (
    <Container className={classes.resultContainer}>
      <SprintHeader />

      <Container className={classes.issueContainer}>
        <Button onClick={download} className={classes.downloadButton} color="primary" variant="contained">
          Download results
        </Button>
      </Container>

      {issues.map((issue) => {
        return (
          <Container key={issue._id} className={classes.issueContainer}>
            <IssueCard issue={issue} mode="show" />
            <Grid container spacing={2} justifyContent="center">
              <CreateStatistic issueId={issue._id} />
            </Grid>
          </Container>
        );
      })}
    </Container>
  );
};

export { ResultsPage };
