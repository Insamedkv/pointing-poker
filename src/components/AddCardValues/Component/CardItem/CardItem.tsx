import React, { FC, useState } from 'react';
import { Avatar, Box, Card, Typography } from '@material-ui/core';
import { ICardItemProps } from 'defaultTypes';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useStyles } from './CardItem.styles';
import CardIconCoffee from '../../../../asset/CardIconCoffee.png';
// import SPIcon from '../../../../asset/SPIcon.png';
import ApprovedCardIcon from '../../../../asset/ApprovedCardIcon.png';

export const CardItem: FC<ICardItemProps> = ({ name, onClick, className }) => {
  const classes = useStyles();
  const { shortScoreType } = useTypedSelector((state) => state.settings);
  const cardIcon =
    name === 'Unknown' ? (
      <Avatar className={classes.cardImage} alt="IconImage" src={CardIconCoffee} />
    ) : (
      <Typography className={classes.cardIcon} component="span">
        {shortScoreType}
      </Typography>
    );
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
      {cardIcon}
      <Box className={classes.cardImageReverse}>{name}</Box>
    </Card>
  );
};
