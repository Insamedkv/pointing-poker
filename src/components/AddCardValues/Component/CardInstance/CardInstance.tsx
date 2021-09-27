import { Container } from '@material-ui/core';
import { ICardInstanceProps } from 'defaultTypes';
import React, { FC, useState } from 'react';
import { CardBack } from '../CardBack';
import { CardItem } from '../CardItem';
import { useStyles } from './CardInstance.styles';

export const CardInstance: FC<ICardInstanceProps> = ({ itemVal, valueIndex, className, onClick, onSubmit }) => {
  const classes = useStyles();
  const [flip, setFlip] = useState(false);

  // const changeValue = (index: number, newValue: string) => {
  //   setDataCards((prev) => {
  //     return [...prev.slice(0, index), newValue, ...prev.slice(index + 1)];
  //   });
  // };

  // const deleteCard = (index: number) => {
  //   setDataCards((prev) => {
  //     return [...prev.slice(0, index), ...prev.slice(index + 1)];
  //   });
  // };

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
        onClick={() => onClick}
        handleClick={() => {
          setFlip(false);
        }}
        onSubmit={() => onSubmit}
        valueIndex={valueIndex}
        className={flip === true ? classes.cardStylesFront : classes.cardStylesBack}
        value={itemVal}
      />
    </Container>
  );
};
