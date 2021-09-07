import { Box, Container, IconButton, Link, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import React, { FC, ReactElement } from 'react';
import { useStyles } from './Footer.styles';
import { data } from './AuthorList';

export const Footer: FC = (): ReactElement => {
  const classes = useStyles();

  const authors = data.map((item, index) => {
    const { name, gitHubSrc } = item;

    return (
      <Link href={gitHubSrc} key={index}>
        <Box className={classes.author}>
          <IconButton>
            <GitHubIcon />
          </IconButton>
          <Box>{name}</Box>
        </Box>
      </Link>
    );
  });

  return (
    <Container className={classes.footerContainer}>
      <Box className={classes.footerContainer} bgcolor="primary.main">
        <Typography variant="h6" className={classes.title}>
          Authors:
          <Box className={classes.author}>{authors}</Box>
        </Typography>
      </Box>
    </Container>
  );
};
