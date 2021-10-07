import React, { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppBar, Avatar, Box, Container, IconButton } from '@material-ui/core';
import { toggleChat } from 'reduxstore/chatSlice/chatSlice';
import { Chat } from '@material-ui/icons';
import { useStyles } from './Header.styles';
import Logo from '../../asset/logo.png';

export const Header: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Container className={classes.container}>
        <Box className={classes.containerHigh} bgcolor="primary.main"></Box>
        <Box className={classes.containerLow} bgcolor="secondary.main"></Box>
        <NavLink to="/pointing-poker">
          <Avatar alt="Logo" src={Logo} className={classes.containerLogo} />
        </NavLink>
        <IconButton className={classes.containerIcon} onClick={() => dispatch(toggleChat())}>
          <Chat />
        </IconButton>
      </Container>
    </AppBar>
  );
};
