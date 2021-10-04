import React from 'react';
import { Container, Grid } from '@material-ui/core';
import SectionHeader from 'components/SectionHeader';
import { useTypedSelector } from 'hooks/useTypedSelector';
import CreateStatistic from 'components/CreateStatistic/CreateStatistic';
import { useStyles } from './Statistic.styles';

const Statistic: React.FC = () => {
  const classes = useStyles();
  const { currentIssue, isRoundstarted } = useTypedSelector((state) => state.game);

  return (
    <>
      {currentIssue && !isRoundstarted && (
        <Container className={classes.statisticcontainer}>
          <SectionHeader header="Statistics" />

          <Grid container spacing={2}>
            <CreateStatistic issueId={currentIssue} />
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Statistic;
