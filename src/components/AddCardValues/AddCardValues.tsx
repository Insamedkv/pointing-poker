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
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <CardForAdd
          className={flipAddCard === true ? classes.cardStylesBack : classes.cardStyles}
          onClick={() => setFlipAddCard(!flipAddCard)}
        />
        <CardBack
          handleClick={setFlipAddCard}
          invisBtn={true}
          className={flipAddCard === true ? classes.cardStyles : classes.cardStylesBack}
        />
      </Grid>
      {cards.map((card) => (
        <Grid item key={card.id} xs={3}>
          <CardInstance valueIndex={card.id} itemVal={card.value} />
        </Grid>
      ))}
    </Grid>
  );
};
