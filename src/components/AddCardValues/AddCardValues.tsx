import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { ICardItem } from 'reduxstore/settingsSlice/settingsActionTypes';
import { addNewCard } from 'reduxstore/settingsSlice/settingsSlice';
import { useStyles } from './AddCardValues.styles';
import { CardBack } from './Component/CardBack/index';
import { CardForAdd } from './Component/CardForAdd/CardForAdd';
import { CardInstance } from './Component/CardInstance/CardInstance';

export const AddCardValues: FC = () => {
  const classes = useStyles();
  const cards = useTypedSelector((state) => state.settings.cardTypes);
  const [flipAddCard, setFlipAddCard] = useState<boolean>(false);

  return (
    <Grid container spacing={3} className={classes.cardsContainer}>
      <Grid item className={classes.card} xs={4} sm={3} md>
        <CardForAdd
          className={flipAddCard === true ? classes.cardStylesBack : classes.cardStyles}
          onClick={() => setFlipAddCard(!flipAddCard)}
        />
        <CardBack
          handleClick={setFlipAddCard}
          invisBtn={true}
          className={flipAddCard === true ? classes.cardStylesFront : classes.cardStylesBack}
        />
      </Grid>

      {cards.map((card: ICardItem) => (
        <Grid key={card.id} item xs={4} sm={3} md>
          <CardInstance valueIndex={card.id} itemVal={card.value} className={classes.card} />
        </Grid>
      ))}
    </Grid>
  );
};
