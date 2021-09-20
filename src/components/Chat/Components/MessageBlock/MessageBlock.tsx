import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import PersonPanel from 'components/PersonPanel';
import { IUserInfo } from 'defaultTypes';
import { useStyles } from 'components/Chat/Chat.styles';

interface IMessageProps {
  user: IUserInfo;
  message: { date: string; text: string };
}

const MessageBlock: React.FC<IMessageProps> = ({ user, message }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={1} justifyContent="space-between">
      <Grid item sm={6}>
        <PersonPanel userInfo={user} />
      </Grid>
      <Grid item sm={6} className={classes.chatContainer}>
        <Container className={classes.messageField}>
          <Typography component="span" className={classes.dateSection}>
            {message.date}
          </Typography>
          <Typography component="span" className={classes.textSection}>
            {message.text}
          </Typography>
        </Container>
      </Grid>
    </Grid>
  );
};

export default MessageBlock;
