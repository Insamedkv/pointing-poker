import React from 'react';
import { Container, Grid, IconButton, Typography } from '@material-ui/core';
import BlockIcon from '@material-ui/icons/Block';
import PersonPanel from 'components/PersonPanel';
import { IAvataraInfo, IUserInfo } from 'defaultTypes';
import { useStyles } from 'components/Chat/Chat.styles';
import Avatara from 'components/Avatara';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { getUserById } from 'services/httpUser';
import { useDispatch } from 'react-redux';
import { kickOutPlayerModal } from 'reduxstore/modalSlice/modalActions';

interface IMessageProps {
  user: IUserInfo;
  message: { date: Date; text: string };
}

const MessageBlock: React.FC<IMessageProps> = ({ user, message }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { userId, isDealer } = useTypedSelector((state) => state.currentUser);
  const date = new Date(message.date);
  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: '2-digit',
  };

  const userInfoObj: IAvataraInfo = {
    firstName: user.firstName,
    lastName: user.lastName,
    src: user.avatar,
    size: 'small',
  };

  const openKickPlayerModal = async () => {
    const initiator = await getUserById(userId);
    dispatch(kickOutPlayerModal(user, initiator));
  };

  return (
    <Grid container spacing={1} justifyContent="space-between">
      <Grid item xs={12} className={classes.chatContainer}>
        <Container className={classes.messageField}>
          {isDealer && user._id !== userId && (
            <IconButton className={classes.kickPlayer} onClick={openKickPlayerModal}>
              <BlockIcon></BlockIcon>
            </IconButton>
          )}
          <Container className={classes.usernameContainer}>
            <Avatara avatar={userInfoObj} />
            <Typography component="span" className={classes.nameSection}>
              {user.firstName} {user.lastName}
            </Typography>
          </Container>
          <Typography component="span" className={classes.textSection}>
            {message.text}
          </Typography>
          <Typography component="span" className={classes.dateSection}>
            {date.toLocaleDateString('en-GB', options)}
          </Typography>
        </Container>
      </Grid>
    </Grid>
  );
};

export default MessageBlock;
