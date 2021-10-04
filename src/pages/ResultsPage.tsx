import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import SprintHeader from 'components/SprintHeader';
import { Container, Grid } from '@material-ui/core';
import { useTypedSelector } from 'hooks/useTypedSelector';
import IssueCard from 'components/IssueCard';
import { getRoomBets } from 'services/httpRoom';
import { setUsersBets } from 'reduxstore/gameSlice';
import Statistic from 'components/Statistic';
import CreateStatistic from 'components/CreateStatistic/CreateStatistic';
import { Bet, IssueResp } from 'services/serviceTypes';
import { IIssue } from 'defaultTypes';
import { useStyles } from './ResultsPage.styles';

const ResultsPage: React.FC = () => {
  const classes = useStyles();
  const issues = useTypedSelector((state) => state.issues);

  return (
    <Container className={classes.resultContainer}>
      <SprintHeader />

      {issues.map((issue) => {
        return (
          <Container key={issue._id} className={classes.issueContainer}>
            <IssueCard issue={issue} mode="show" />
            <Grid container spacing={2}>
              <CreateStatistic issueId={issue._id} />
            </Grid>
          </Container>
        );
      })}
    </Container>
  );
};

export { ResultsPage };
