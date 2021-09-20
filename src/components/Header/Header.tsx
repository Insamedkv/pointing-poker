import { AppBar, Avatar, Box, Container, IconButton } from '@material-ui/core';
import React, { FC, ReactElement } from 'react';
import { Chat } from '@material-ui/icons';
import { useStyles } from './Header.styles';
import Logo from '../../asset/logo.png';

export const Header: FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Container className={classes.container}>
        <Box className={classes.containerHigh} bgcolor="primary.main"></Box>
        <Box className={classes.containerLow} bgcolor="secondary.main"></Box>
        <Avatar alt="Logo" src={Logo} className={classes.containerLogo} />
        <IconButton className={classes.containerIcon}>
          <Chat />
        </IconButton>
      </Container>
    </AppBar>
  );
};
