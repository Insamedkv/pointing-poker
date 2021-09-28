import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, IconButton, Slide, TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { getMessages, sendMessage } from 'services/httpRoom';
import { setMessages } from 'reduxstore/chatSlice/chatSlice';
import { useStyles } from './Chat.styles';
import MessageBlock from './Components/MessageBlock';
import { socket } from '../../index';
// import * as list from 'utils/fakeData/fakeUser.json';

// interface IMessages {
//   user: IUserInfo;
//   message: { date: string; text: string };
// }

const Chat: React.FC = () => {
  const classes = useStyles();
  const isChatOpen = useTypedSelector((state) => state.chat.isOpen);
  const messagesList = useTypedSelector((state) => state.chat.chat);
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  useEffect(() => {
    getMessages().then((msgs) => dispatch(setMessages(msgs)));
    socket.onMessage(dispatch);
  }, []);

  return (
    <>
      {/* <Button onClick={() => dispatch(toggleChat())}>{isChatOpen.toString()}</Button> */}
      <Slide in={!isChatOpen} timeout={300}>
        <Container className={classes.chatMainContainer}>
          <Container className={classes.chatWorkflow}>
            <Container
              style={{
                padding: '0px',
                position: 'sticky',
                display: 'flex',
                justifyContent: 'space-between',
                background: '#4ef',
              }}
            >
              <TextField
                fullWidth
                variant="outlined"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              ></TextField>
              <IconButton
                onClick={() => {
                  sendMessage(message);
                }}
              >
                <SendIcon></SendIcon>
              </IconButton>
            </Container>
            {messagesList.map((msg, index) => (
              <MessageBlock key={index} user={msg.user} message={{ text: msg.content, date: msg.createdAt }} />
            ))}
          </Container>
        </Container>
      </Slide>
    </>
  );
};

export default Chat;
