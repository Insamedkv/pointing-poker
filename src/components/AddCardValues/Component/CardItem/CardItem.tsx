import React, { FC } from 'react';
import { Avatar, Box, Card, Typography } from '@material-ui/core';
import { ICardItemProps } from 'defaultTypes';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useStyles } from './CardItem.styles';
import CardIconCoffee from '../../../../asset/CardIconCoffee.png';
import ApprovedCardIcon from '../../../../asset/ApprovedCardIcon.png';

export const CardItem: FC<ICardItemProps> = ({ name, onClick, className }) => {
  const classes = useStyles();
  const { shortScoreType } = useTypedSelector((state) => state.settings);
  const { currentBet } = useTypedSelector((state) => state.game);
  const cardIcon =
    name === 'Unknown' ? (
      <Avatar className={classes.cardImage} alt="IconImage" src={CardIconCoffee} />
    ) : (
      <Typography className={classes.cardIcon} component="span">
        {shortScoreType}
      </Typography>
    );

  return (
    <Card className={className} onClick={onClick}>
      <Box className={name !== currentBet ? classes.cardStylesNotActive : classes.cardStylesActive}>
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
