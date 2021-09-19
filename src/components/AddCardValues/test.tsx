import React, { FC, useState } from 'react';
import { Container } from '@material-ui/core';
import { useStyles } from './AddCardValues.styles';
import { CardItem } from './Component/CardItem/CardItem';
import { CardBack } from './Component/CardBack/index';
import { CardForAdd } from './Component/CardForAdd/CardForAdd';

interface ICardInstanceProps {
  value: string;
}

export const AddCardValues: FC = () => {
  const classes = useStyles();
  const [dataCards, setDataCards] = useState(['1', 'Unknown', '13']);

  const CardInstance: FC<ICardInstanceProps> = ({ value }) => {
    const [flip, setFlip] = useState<boolean>(false);

    return (
      <Container>
        <CardItem
          name={value}
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
  };

  return (
    <Container className={classes.cardsContainer}>
      <CardForAdd onClick={() => setDataCards((prev) => [...prev, '15'])} />
      {dataCards.map((card, index) => (
        <CardInstance key={index} value={card} />
      ))}
    </Container>
  );
};
