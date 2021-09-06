import { Box, Container, IconButton, Link, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import React, { FC, ReactElement } from 'react';
import { useStyles } from './Footer.styles';
import { data } from './AuthorList';

export const Footer: FC = (): ReactElement => {
  const classes = useStyles();

  const authors = data.map((item, index) => {
    const { name, GitHubSrc } = item;

    return (
      <Link href={GitHubSrc} key={index}>
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
    <Container className={classes.footer_container}>
      <Box className={classes.footer_container}>
        <Typography variant="h5"> Authors:</Typography> {authors}
      </Box>
    </Container>
  );
};
