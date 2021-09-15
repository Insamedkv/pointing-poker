import React, { useState } from 'react';
import { Button, Container, Fade, Grid, Slide, Zoom } from '@material-ui/core';
import { IUserInfo } from 'defaultTypes';
import * as list from 'utils/fakeData/fakeUser.json';
import { useStyles } from './Chat.styles';
import MessageBlock from './Components/MessageBlock';

interface IMessages {
  user: IUserInfo;
  message: { date: string; text: string };
}

const Chat: React.FC = () => {
  const messagesList: Array<IMessages> = list.messages;
  const classes = useStyles();
  const [isOpenChat, setChatOpen] = useState(false);

  const toggleChat = () => {
    setChatOpen((prev) => !prev);
  };

  return (
    <>
      <Button onClick={toggleChat}>{isOpenChat.toString()}</Button>
      <Slide in={!isOpenChat} timeout={300}>
        <Container className={classes.chatMainContainer}>
          <Container className={classes.chatWorkflow}>
            {messagesList.map((msg, index) => (
              <MessageBlock key={index} user={msg.user} message={msg.message} />
            ))}
          </Container>
        </Container>
      </Slide>
    </>
  );
};

export default Chat;
