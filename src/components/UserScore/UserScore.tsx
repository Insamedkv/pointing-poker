import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grid, IconButton, Typography } from '@material-ui/core';
import BlockIcon from '@material-ui/icons/Block';
import Avatara from 'components/Avatara';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { getUserById } from 'services/httpUser';
import { kickOutPlayerModal } from 'reduxstore/modalSlice/modalActions';
import { IAvataraInfo, IUserInfo } from 'defaultTypes';
import { useStyles } from './UseScore.styles';

const INPROGRESS = 'In Progress...';
const UNKNOWN = 'Unknown';

interface IUserScoreProps {
  user: IUserInfo;
  bet?: string | null;
}

const UserScore: React.FC<IUserScoreProps> = ({ user, bet }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { userId, isDealer, isObserver } = useTypedSelector((state) => state.currentUser);
  const { isRoundstarted } = useTypedSelector((state) => state.game);

  const openKickPlayerModal = async () => {
    const initiator = await getUserById(userId);
    dispatch(kickOutPlayerModal(user, initiator));
  };

  const userInfoObj: IAvataraInfo = {
    firstName: user.firstName,
    lastName: user.lastName,
    src: user.avatar,
    size: 'small',
  };

  return (
    // <Grid container spacing={1} justifyContent="space-between">
    <Grid item className={classes.chatContainer}>
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
          {bet || (isRoundstarted ? INPROGRESS : UNKNOWN)}
        </Typography>
      </Container>
    </Grid>
    // </Grid>
  );
};

export default UserScore;
