import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { CardItem } from 'components/AddCardValues/Component/CardItem';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { Bet } from 'services/serviceTypes';
import { getRoomBets } from 'services/httpRoom';
import { useStyles } from './CreateStatistic.styles';

interface IProps {
  issueId?: string;
}

const CreateStatistic: React.FC<IProps> = ({ issueId }) => {
  const classes = useStyles();
  const rules = useTypedSelector((state) => state.currentUser.room?.rules[0]);
  const currentIssue = useTypedSelector((state) => state.game.currentIssue);
  const [currentBets, setCurrentBets] = useState<Array<Bet>>([]);

  const getIssueBets = async () => {
    const response = await getRoomBets(issueId || currentIssue);
    if (!issueId) setCurrentBets(response);
    setCurrentBets(response);
  };

  useEffect(() => {
    getIssueBets();
  }, [issueId]);

  const createStatistic = (defaultBets: Array<Bet>) => {
    const bets = new Map<string, number>();
    if (rules) rules.cardType.forEach((val) => bets.set(val.toString(), 0));
    const totalBets = defaultBets.length;
    defaultBets.forEach((bet) => {
      if (bets.has(bet.content)) {
        const prev = Number(bets.get(bet.content));
        bets.set(bet.content, prev + 1);
      } else {
        bets.set(bet.content, 1);
      }
    });

    let statistic: Array<JSX.Element> = [];

    bets.forEach((count, item) => {
      const percent = (count / totalBets) * 100;
      const percentFormat = percent % 10 === 0 ? `${percent}%` : `${percent.toFixed(2)}%`;
      const isNumber = !Number.isNaN(percent);
      const gtZero = percent > 0;

      const newElement = (
        <Grid key={item} item xs={4} sm={3}>
          <CardItem name={item} className={classes.cardStyles} />
          <Typography align="center" variant="h5">
            {isNumber ? percentFormat : ''}
          </Typography>
        </Grid>
      );
      statistic = gtZero ? [...statistic, newElement] : statistic;
    });

    return <>{statistic}</>;
  };

  return createStatistic(currentBets);
};

export default CreateStatistic;
