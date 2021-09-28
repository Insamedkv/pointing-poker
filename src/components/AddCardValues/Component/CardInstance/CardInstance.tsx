import { Container } from '@material-ui/core';
import { ICardInstanceProps } from 'defaultTypes';
import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteOldCard } from 'reduxstore/settingsSlice/settingsSlice';
import { CardBack } from '../CardBack';
import { CardItem } from '../CardItem';
import { useStyles } from './CardInstance.styles';

export const CardInstance: FC<ICardInstanceProps> = ({ itemVal, valueIndex, className }) => {
  const classes = useStyles();
  const [flip, setFlip] = useState(false);
  const dispatch = useDispatch();

  const deleteCard = (index: number) => {
    dispatch(deleteOldCard(index));
  };

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
        handleClick={setFlip}
        valueIndex={valueIndex}
        className={flip === true ? classes.cardStylesFront : classes.cardStylesBack}
        value={''}
      />
    </Container>
  );
};
