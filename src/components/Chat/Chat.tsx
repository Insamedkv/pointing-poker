import React, { useState } from 'react';
import { Button, Container, Fade, Grid, Slide, Zoom } from '@material-ui/core';
import { IUserInfo } from 'defaultTypes';
import { useStyles } from './Chat.styles';
import MessageBlock from './Components/MessageBlock';

interface IMessages {
  user: IUserInfo;
  message: { date: string; text: string };
}

const Chat: React.FC = () => {
  const classes = useStyles();
  const [isOpenChat, setChatOpen] = useState(false);
  const messagesList: Array<IMessages> = [
    {
      user: { lastName: 'Vladimir', firstName: 'Voba' },
      message: { date: '12-05-2001', text: 'Hello!' },
    },
  ];

  const toggleChat = () => {
    setChatOpen((prev) => !prev);
  };

  return (
    <>
      <Button onClick={toggleChat}>{isOpenChat.toString()}</Button>
      <Slide in={isOpenChat} timeout={300}>
        <Container className={classes.chatMainContainer}>
          <Grid container className={classes.chatWorkflow} spacing={1}>
            {messagesList.map((message) => (
              <MessageBlock key={message.message.text} user={message.user} message={message.message.text} />
            ))}
          </Grid>
        </Container>
      </Slide>
    </>
  );
};

export default Chat;
