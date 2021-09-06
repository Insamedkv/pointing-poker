import { AppBar, Box, Avatar, Container, IconButton } from '@material-ui/core';
import React, { FC, ReactElement } from 'react';
import { Chat } from '@material-ui/icons';
import { useStyles } from './Header.styles';
import Logo from '../../asset/logo.png';

export const Header: FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <AppBar>
      <Container style={{ padding: 0, margin: 0, maxWidth: 'none' }} className={classes.container}>
        <Box className={classes.container__high}></Box>
        <Box className={classes.container__low}></Box>
        <Avatar
          alt="Logo"
          src={Logo}
          style={{ width: '70px', height: '70px', position: 'absolute' }}
          className={classes.container__logo}
        />
        <IconButton className={classes.container__icon} style={{ position: 'absolute', color: 'white' }}>
          <Chat />
        </IconButton>
      </Container>
    </AppBar>
  );
};
