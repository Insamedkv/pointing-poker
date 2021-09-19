import React, { FC, useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import { useStyles } from './AddCardValues.styles';
import { CardItem } from './Component/Card/Card';
import { CardBack } from './Component/CardBack/index';
import { CardForAdd } from './Component/CardForAdd/CardForAdd';

interface ICardInstanceProps {
  value: string;
  valueIndex: number;
}

export const AddCardValues: FC = () => {
  const classes = useStyles();
  const [dataCards, setDataCards] = useState(['1', 'Unknown', '13']);

  const changeValue = (index: number, newValue: string) => {
    setDataCards((prev) => {
      return [...prev.slice(0, index), newValue, ...prev.slice(index + 1)];
    });
  };

  useEffect(() => console.log(dataCards), [dataCards]);

  const CardInstance: FC<ICardInstanceProps> = ({ value, valueIndex }) => {
    const [flip, setFlip] = useState<boolean>(false);

    return (
      <Container>
        <CardItem
          name={value}
          valueIndex={valueIndex}
          className={flip === true ? classes.cardStylesBack : classes.cardStylesFront}
          onClick={() => {
            setFlip(!flip);
          }}
        />
        <CardBack
          onClick={() => setFlip(!flip)}
          onSubmit={changeValue}
          valueIndex={valueIndex}
          className={flip === true ? classes.cardStylesFront : classes.cardStylesBack}
        />
      </Container>
    );
  };

  return (
    <Container className={classes.cardsContainer}>
      <CardForAdd valueIndex={99999999} onClick={() => setDataCards((prev) => [...prev, '15'])} />
      {dataCards.map((card, index) => (
        <CardInstance key={index} valueIndex={index} value={card} />
      ))}
    </Container>
  );
};
