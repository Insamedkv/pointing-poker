import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Container, Slide, TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { getMessages, sendMessage } from 'services/httpRoom';
import { setMessages } from 'reduxstore/chatSlice/chatSlice';
import { useStyles } from './Chat.styles';
import MessageBlock from './Components/MessageBlock';
import { socket } from '../../index';

const Chat: React.FC = () => {
  const classes = useStyles();
  const isChatOpen = useTypedSelector((state) => state.chat.isOpen);
  const messagesList = useTypedSelector((state) => state.chat.chat);
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  useEffect(() => {
    getMessages().then((msgs) => dispatch(setMessages(msgs)));
  }, []);

  return (
    <>
      <Slide in={!isChatOpen} timeout={300}>
        <Container className={classes.chatMainContainer}>
          <Container className={classes.chatWorkflow}>
            <Container className={classes.messagesArea}>
              {messagesList.map((msg, index) => (
                <MessageBlock key={index} user={msg.user} message={{ text: msg.content, date: msg.createdAt }} />
              ))}
            </Container>
            <Container className={classes.enterTextArea}>
              <TextField
                multiline
                className={classes.inputMessageField}
                rows={3}
                fullWidth
                variant="outlined"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              ></TextField>
              <Button
                variant="contained"
                disabled={message === ''}
                color="primary"
                onClick={() => {
                  sendMessage(message);
                  setMessage('');
                }}
              >
                <SendIcon></SendIcon>
              </Button>
            </Container>
          </Container>
        </Container>
      </Slide>
    </>
  );
};

export default Chat;
