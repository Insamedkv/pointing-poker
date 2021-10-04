import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grid, Typography } from '@material-ui/core';
import { CardItem } from 'components/AddCardValues/Component/CardItem';
import SectionHeader from 'components/SectionHeader';
import { getRoomBets } from 'services/httpRoom';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { setUsersBets } from 'reduxstore/gameSlice';
import { useStyles } from './Statistic.styles';

const Statistic: React.FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { currentIssue, userBets } = useTypedSelector((state) => state.game);
  const rules = useTypedSelector((state) => state.currentUser.room?.rules[0]);

  const getIssue = async () => {
    const response = await getRoomBets(currentIssue);
    dispatch(setUsersBets(response));
  };

  const createStatistic = () => {
    const bets = new Map<string, number>();
    if (rules) rules.cardType.forEach((val) => bets.set(val.toString(), 0));
    console.log(bets);
    const totalBets = userBets.length;
    userBets.forEach((bet) => {
      if (bets.has(bet.content)) {
        const prev = Number(bets.get(bet.content));
        bets.set(bet.content, prev + 1);
      } else {
        bets.set(bet.content, 1);
      }
    });

    let statistic: Array<JSX.Element> = [];

    bets.forEach((count, item) => {
      const newElement = (
        <Grid key={item} item xs={3}>
          <CardItem name={item} className={classes.cardStyles} />
          <Typography align="center" variant="h4">
            {(count / totalBets) * 100}%
          </Typography>
        </Grid>
      );
      statistic = [...statistic, newElement];
    });

    return <>{statistic}</>;
  };

  useEffect(() => {
    if (currentIssue !== '') getIssue();
  }, [currentIssue]);

  useEffect(() => {
    createStatistic();
    console.log(userBets);
  }, [userBets]);

  return (
    <>
      {userBets.length > 0 && (
        <Container className={classes.statisticcontainer}>
          <SectionHeader header="Statistics" />

          <Grid container spacing={2}>
            {createStatistic()}
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Statistic;
