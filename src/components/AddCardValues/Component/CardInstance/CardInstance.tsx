import { Container } from '@material-ui/core';
import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteOldCard } from 'reduxstore/settingsSlice/settingsSlice';
import { CardBack } from '../CardBack';
import { CardItem } from '../CardItem';
import { useStyles } from './CardInstance.styles';

interface ICardInstanceProps {
  className?: string;
  itemVal: string;
  valueIndex: string;
  onClick?: (indexValue: number, value: string) => void;
  onSubmit?: void;
}

export const CardInstance: FC<ICardInstanceProps> = ({ itemVal, valueIndex, className }) => {
  const classes = useStyles();
  const [flip, setFlip] = useState(false);
  const dispatch = useDispatch();

  const deleteCard = (id: string) => {
    dispatch(deleteOldCard(id));
    setFlip(false);
  };

  return (
    <Container className={className}>
      <CardItem
        name={itemVal}
        value={itemVal}
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
        value={itemVal}
      />
    </Container>
  );
};
