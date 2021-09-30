import React, { FC, useState } from 'react';
import { Grid } from '@material-ui/core';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useStyles } from './AddCardValues.styles';
import { CardForAdd } from './Component/CardForAdd/CardForAdd';
import { CardBack } from './Component/CardBack';
import { CardInstance } from './Component/CardInstance/CardInstance';

export const AddCardValues: FC = () => {
  const classes = useStyles();
  const cards = useTypedSelector((state) => state.settings.cardTypes);
  const [flipAddCard, setFlipAddCard] = useState<boolean>(false);

  return (
    <>
      <Grid item className={classes.card} xs={3}>
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
      <Grid container spacing={3} className={classes.cardsContainer}>
        {cards.map((card) => (
          <Grid key={card.id} item xs={2} sm={2}>
            <CardInstance valueIndex={card.id} itemVal={card.value} className={classes.card} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
