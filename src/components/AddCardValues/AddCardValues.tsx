import React, { FC, useState } from 'react';
import { Grid } from '@material-ui/core';
import { useStyles } from './AddCardValues.styles';
import { CardBack } from './Component/CardBack/index';
import { CardForAdd } from './Component/CardForAdd/CardForAdd';
import { CardInstance } from './Component/CardInstance/CardInstance';

export const AddCardValues: FC = () => {
  const classes = useStyles();
  const [dataCards, setDataCards] = useState(['Unknown']);
  const [flipAddCard, setFlipAddCard] = useState(false);

  const createNewCard = (index: number, newValue: string) => {
    if (newValue !== '') {
      setFlipAddCard(!flipAddCard);
      setDataCards((prev) => {
        return [...prev, newValue];
      });
    }
  };

  const changeValue = (index: number, newValue: string) => {
    setDataCards((prev) => {
      return [...prev.slice(0, index), newValue, ...prev.slice(index + 1)];
    });
  };

  const deleteCard = (index: number) => {
    setDataCards((prev) => {
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
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
          <CardInstance
            valueIndex={index}
            itemVal={card}
            className={classes.card}
            onClick={deleteCard}
            onSubmit={changeValue}
          />
        </Grid>
      ))}
    </Grid>
  );
};
