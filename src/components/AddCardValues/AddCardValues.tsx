import React, { FC, useState } from 'react';
import { Container } from '@material-ui/core';
import { useStyles } from './AddCardValues.styles';
import { CardForAdd } from './Component';
import { CardItem } from '../Card/Card';

export const AddCardValues: FC = () => {
  const classes = useStyles();
  const [dataCards, setDataCards] = useState(['1', 'Unknown', '13']);

  const cardList = dataCards.map((item, index) => {
    return <CardItem name={item} key={index} />;
  });

  return (
    <Container className={classes.cardsContainer}>
      <CardForAdd
        onClick={() => {
          return setDataCards([...dataCards, '15']);
        }}
      />
      {cardList}
    </Container>
  );
};
