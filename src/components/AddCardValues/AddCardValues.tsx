import React, { FC, useState } from 'react';
import { Container } from '@material-ui/core';
import { useStyles } from './AddCardValues.styles';
import { CardItem } from './Component/Card/Card';
import { CardBack } from './Component/CardBack/index';
import { CardForAdd } from './Component/CardForAdd/CardForAdd';

export const AddCardValues: FC = () => {
  const classes = useStyles();
  const [dataCards, setDataCards] = useState(['1', 'Unknown', '13']);

  const cardList = dataCards.map((item, index) => {
    const [flip, setFlip] = useState<boolean>(false);

    return (
      <Container key={index}>
        <CardItem
          name={item}
          className={flip === true ? classes.cardStylesBack : classes.cardStylesFront}
          onClick={() => {
            setFlip(!flip);
          }}
        />
        <CardBack
          onClick={() => setFlip(!flip)}
          className={flip === true ? classes.cardStylesFront : classes.cardStylesBack}
        />
      </Container>
    );
  });

  return (
    <Container className={classes.cardsContainer}>
      <CardForAdd
        onClick={() => {
          console.log('sdv');
          setDataCards((prev) => [...prev, '15']);
        }}
      />
      {cardList}
    </Container>
  );
};
