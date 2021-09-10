import React, { FC, useState } from 'react';
import { Avatar, Box, Card } from '@material-ui/core';
import { useStyles } from './Card.styles';
import CardIconCoffe from '../../asset/CardIconCoffe.png';
import SPIcon from '../../asset/SPIcon.png';
import ApprovedCardIcon from '../../asset/ApprovedCardIcon.png';

export interface ICardItemProps {
  name: string;
}

export const CardItem: FC<ICardItemProps> = ({ name }) => {
  const classes = useStyles();
  const result = name === 'Unknown' ? CardIconCoffe : SPIcon;
  const [active, setActive] = useState<boolean>(false);

  return (
    <Card
      className={classes.cardStyles}
      onClick={() => {
        setActive(!active);
      }}
    >
      <Box className={active === false ? classes.cardStylesNotActive : classes.cardStylesActive}>
        <Box className={classes.backgrIcon}>
          <Avatar alt="AprovedIcon" src={ApprovedCardIcon} className={classes.approveImage} />
        </Box>
      </Box>
      <Box className={classes.cardItem}>{name}</Box>
      <Avatar className={classes.cardImage} alt="IconImage" src={result} />
      <Box className={classes.cardImageReverse}>{name}</Box>
    </Card>
  );
};
