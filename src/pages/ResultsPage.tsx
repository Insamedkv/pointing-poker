import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SprintHeader from 'components/SprintHeader';
import { Button, Container, Grid } from '@material-ui/core';
import { useTypedSelector } from 'hooks/useTypedSelector';
import IssueCard from 'components/IssueCard';
import { setBet, setCurrentIssue } from 'reduxstore/gameSlice';
import { downloadResults } from 'services/httpRoom';
import CreateStatistic from 'components/CreateStatistic/CreateStatistic';
import { useStyles } from './ResultsPage.styles';

const ResultsPage: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const issues = useTypedSelector((state) => state.issues);
  const roomId = useTypedSelector((state) => state.currentUser.room?._id);

  const download = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (roomId) downloadResults(roomId);
  };

  useEffect(() => {
    dispatch(setCurrentIssue(''));
    dispatch(setBet(''));
  }, []);

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
