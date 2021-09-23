import React, { FC, useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import { ICardInstanceProps } from 'defaultTypes';
import { useStyles } from './AddCardValues.styles';
import { CardItem } from './Component/CardItem/CardItem';
import { CardBack } from './Component/CardBack/index';
import { CardForAdd } from './Component/CardForAdd/CardForAdd';

export const AddCardValues: FC = () => {
  const classes = useStyles();
  const [dataCards, setDataCards] = useState(['Unknown']);
  const [flipAddCard, setFlipAddCard] = useState<boolean>(false);

  const changeValue = (index: number, newValue: string) => {
    setDataCards((prev) => {
      return [...prev.slice(0, index), newValue, ...prev.slice(index + 1)];
    });
  };

  const createNewCard = (index: number, newValue: string) => {
    if (newValue !== '') {
      setFlipAddCard(!flipAddCard);
      setDataCards((prev) => {
        return [...prev, newValue];
      });
    }
  };

  const deleteCard = (index: number) => {
    setDataCards((prev) => {
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
  };

  const CardInstance: FC<ICardInstanceProps> = ({ itemVal, valueIndex, className }) => {
    const [flip, setFlip] = useState<boolean>(false);

    return (
      <Container className={className}>
        <CardItem
          name={itemVal}
          valueIndex={valueIndex}
          className={flip === true ? classes.cardStylesBack : classes.cardStylesFront}
          onClick={() => {
            setFlip(!flip);
          }}
        />
        <CardBack
          onClick={() => deleteCard(valueIndex)}
          handleClick={() => {
            setFlip(false);
          }}
          onSubmit={changeValue}
          valueIndex={valueIndex}
          className={flip === true ? classes.cardStylesFront : classes.cardStylesBack}
          value={itemVal}
        />
      </Container>
    );
  };

  return (
    <Grid container spacing={3} className={classes.cardsContainer}>
      <Grid item className={classes.card} xs={4} sm={3} md>
        <CardForAdd
          valueIndex={99999999}
          className={flipAddCard === true ? classes.cardStylesBack : classes.cardStyles}
          onClick={() => setFlipAddCard(!flipAddCard)}
        />
        <CardBack
          onClick={() => setFlipAddCard(false)}
          onSubmit={createNewCard}
          value={''}
          invisBtn={true}
          className={flipAddCard === true ? classes.cardStylesFront : classes.cardStylesBack}
          valueIndex={99999998}
        />
      </Grid>

      {dataCards.map((card, index) => (
        <Grid key={index} item xs={4} sm={3} md>
          <CardInstance valueIndex={index} itemVal={card} className={classes.card} />
        </Grid>
      ))}
    </Grid>
  );
};
