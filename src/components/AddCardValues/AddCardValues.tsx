import React, { FC, useState } from 'react';
import { Container } from '@material-ui/core';
import { ICardInstanceProps } from 'defaultTypes';
import { useStyles } from './AddCardValues.styles';
import { CardItem } from './Component/CardItem/CardItem';
import { CardBack } from './Component/CardBack/index';
import { CardForAdd } from './Component/CardForAdd/CardForAdd';

export const AddCardValues: FC = () => {
  const classes = useStyles();
  const [dataCards, setDataCards] = useState(['1', 'Unknown', '13']);
  const [flipAddCard, setFlipAddCard] = useState<boolean>(false);

  const changeValue = (index: number, newValue: string) => {
    setDataCards((prev) => {
      return [...prev.slice(0, index), newValue, ...prev.slice(index + 1)];
    });
  };

  const createNewCard = (index: number, newValue: string) => {
    setFlipAddCard(!flipAddCard);
    setDataCards((prev) => {
      return [...prev, newValue];
    });
  };

  const CardInstance: FC<ICardInstanceProps> = ({ val, valueIndex }) => {
    const [flip, setFlip] = useState<boolean>(false);
    const itemVal = val;

    return (
      <Container>
        <CardItem
          name={val}
          valueIndex={valueIndex}
          className={flip === true ? classes.cardStylesBack : classes.cardStylesFront}
          onClick={() => {
            setFlip(!flip);
          }}
        />
        <CardBack
          // onClick={() => setFlip(!flip)}
          onSubmit={changeValue}
          valueIndex={valueIndex}
          className={flip === true ? classes.cardStylesFront : classes.cardStylesBack}
          value={itemVal}
        />
      </Container>
    );
  };

  return (
    <Container className={classes.cardsContainer}>
      <CardForAdd
        valueIndex={99999999}
        className={flipAddCard === true ? classes.cardStylesBack : classes.cardStyles}
        onClick={() => setFlipAddCard(!flipAddCard)}
      />
      <CardBack
        // onClick={() => setFlipAddCard(!flipAddCard)}
        onSubmit={createNewCard}
        value={''}
        className={flipAddCard === true ? classes.cardStylesFront : classes.cardStylesBack}
        valueIndex={99999998}
      />
      {dataCards.map((card, index) => (
        <CardInstance key={index} valueIndex={index} val={card} />
      ))}
    </Container>
  );
};
