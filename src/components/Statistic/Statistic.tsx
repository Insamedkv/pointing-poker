import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import SectionHeader from 'components/SectionHeader';
import { useTypedSelector } from 'hooks/useTypedSelector';
import CreateStatistic from 'components/CreateStatistic/CreateStatistic';
import { getRoomBets } from 'services/httpRoom';
import { Bet } from 'services/serviceTypes';
import { useStyles } from './Statistic.styles';

const Statistic: React.FC = () => {
  const classes = useStyles();
  const { currentIssue, isRoundstarted, userBets } = useTypedSelector((state) => state.game);
  const [currentBets, setCurrentBets] = useState<Array<Bet>>([]);

  useEffect(() => {
    if (currentIssue !== '') getRoomBets(currentIssue).then((data) => setCurrentBets(data));
  }, [currentIssue, userBets]);

  // useEffect(() => {
  //   if (currentIssue !== '') getRoomBets(currentIssue).then((data) => setCurrentBets(data));
  // }, [userBets]);

  return (
    <>
      {currentIssue && !isRoundstarted && currentBets.length > 0 && (
        <Container className={classes.statisticcontainer}>
          <SectionHeader header="Statistics" />

          <Grid container spacing={2} justifyContent="center">
            <CreateStatistic issueId={currentIssue} />
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Statistic;
