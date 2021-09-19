import React, { FC, useState } from 'react';
import { Avatar, Box, Card } from '@material-ui/core';
import { useStyles } from './Card.styles';
import CardIconCoffee from '../../../../asset/CardIconCoffee.png';
import SPIcon from '../../../../asset/SPIcon.png';
import ApprovedCardIcon from '../../../../asset/ApprovedCardIcon.png';
import { ICardItemProps } from '../../../../defaultTypes';

export const CardItem: FC<ICardItemProps> = ({ name, onClick, className }) => {
  const classes = useStyles();
  const result = name === 'Unknown' ? CardIconCoffee : SPIcon;
  const [active, setActive] = useState<boolean>(false);

  return (
    <Card
      className={className}
      onClick={onClick}
      // () => { setActive(!active) }
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
