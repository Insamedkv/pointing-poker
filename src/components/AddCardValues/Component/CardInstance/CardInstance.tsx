import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteOldCard } from 'reduxstore/settingsSlice/settingsSlice';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { Room, ScoreTypes } from 'defaultTypes';
import { setBet } from 'reduxstore/gameSlice';
import { CardBack } from '../CardBack';
import { CardItem } from '../CardItem';
import { useStyles } from '../../AddCardValues.styles';

interface ICardInstanceProps {
  className?: string;
  itemVal: string;
  valueIndex: string;
  onClick?: (indexValue: number, value: string) => void;
  onSubmit?: void;
}

export const CardInstance: FC<ICardInstanceProps> = ({ itemVal, valueIndex }) => {
  const classes = useStyles();
  const { scoreType } = useTypedSelector((state) => state.settings);
  const [flip, setFlip] = useState(false);
  const dispatch = useDispatch();

  const deleteCard = (id: string) => {
    dispatch(deleteOldCard(id));
    setFlip(false);
  };

  return (
    <>
      <CardItem
        name={itemVal}
        value={itemVal}
        valueIndex={valueIndex}
        className={flip === true ? classes.cardStylesBack : classes.cardStyles}
        onClick={() => {
          if (scoreType === ScoreTypes.CUSTOM) setFlip(!flip);
        }}
      />
      <CardBack
        onClick={() => deleteCard(valueIndex)}
        handleClick={setFlip}
        valueIndex={valueIndex}
        className={flip === true ? classes.cardStyles : classes.cardStylesBack}
        value={itemVal}
      />
    </>
  );
};
