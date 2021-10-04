import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grid, Typography } from '@material-ui/core';
import { CardItem } from 'components/AddCardValues/Component/CardItem';
import SectionHeader from 'components/SectionHeader';
import { getRoomBets } from 'services/httpRoom';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { setUsersBets } from 'reduxstore/gameSlice';
import CreateStatistic from 'components/CreateStatistic/CreateStatistic';
import { useStyles } from './Statistic.styles';

const Statistic: React.FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { currentIssue, userBets } = useTypedSelector((state) => state.game);

  // const getIssue = async () => {
  //   const response = await getRoomBets(currentIssue);
  //   dispatch(setUsersBets(response));
  // };

  return (
    <>
      {userBets.length > 0 && (
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
