import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { addNewCard } from 'reduxstore/settingsSlice/settingsSlice';
import { useStyles } from './AddCardValues.styles';
import { CardBack } from './Component/CardBack/index';
import { CardForAdd } from './Component/CardForAdd/CardForAdd';
import { CardInstance } from './Component/CardInstance/CardInstance';

export const AddCardValues: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cards = useTypedSelector((state) => state.settings.cardTypes);
  const [flipAddCard, setFlipAddCard] = useState<boolean>(false);

  const createNewCard = (index: number, newValue: string) => {
    dispatch(addNewCard(newValue));
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
          onSubmit={createNewCard}
          value={''}
          invisBtn={true}
          className={flipAddCard === true ? classes.cardStylesFront : classes.cardStylesBack}
          valueIndex={99999998}
        />
      </Grid>

      {cards.map((card, index) => (
        <Grid key={index} item xs={4} sm={3} md>
          <CardInstance valueIndex={index} itemVal={card} className={classes.card} />
        </Grid>
      ))}
    </Grid>
  );
};
