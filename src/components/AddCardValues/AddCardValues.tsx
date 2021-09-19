import React, { FC, useState } from 'react';
import { Container } from '@material-ui/core';
import { ICardInstanceProps } from 'defaultTypes';
import { useStyles } from './AddCardValues.styles';
import { CardItem } from './Component/CardItem/CardItem';
import { CardBack } from './Component/CardBack/index';
import { CardForAdd } from './Component/CardForAdd/CardForAdd';

export const AddCardValues: FC = () => {
  const classes = useStyles();
  const [dataCards, setDataCards] = useState(['1', 'Unknown', '13']);

  const CardList: FC<ICardInstanceProps> = ({ val }) => {
    const [flip, setFlip] = useState<boolean>(false);
    const itemVal = val;

    return (
      <Container>
        <CardItem
          name={val}
          className={flip === true ? classes.cardStylesBack : classes.cardStylesFront}
          onClick={() => {
            setFlip(!flip);
          }}
        />
        <CardBack
          onClick={() => setFlip(!flip)}
          className={flip === true ? classes.cardStylesFront : classes.cardStylesBack}
          value={itemVal}
        />
      </Container>
    );
  };

  return (
    <Container className={classes.cardsContainer}>
      <CardForAdd
        onClick={() => {
          setDataCards([...dataCards, '15']);
        }}
      />
      {dataCards.map((item, index) => (
        <CardList key={index} val={item} />
      ))}
    </Container>
  );
};
