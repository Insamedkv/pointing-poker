import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Container, Grid } from '@material-ui/core';
import SprintHeader from 'components/SprintHeader';
import DealerPanel from 'components/DealerPanel';
import Chat from 'components/Chat';
import IssueList from 'components/IssueList';
import SectionHeader from 'components/SectionHeader';
import { restoreSession } from 'utils/share';
import { setUserCredentials } from 'reduxstore/userSlice';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { Timer } from 'components/Timer';
import { buttonTextConstants } from 'utils/buttonTextConstants';
import { IUserInfo } from 'defaultTypes';
import { getRoomUsers } from 'services/httpRoom';
import UserScore from 'components/UserScore';
import { useStyles } from './GamePage.styles';
import { socket } from '../index';

const GamePage: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentSession = restoreSession();
  const { room, isDealer } = useTypedSelector((state) => state.currentUser);
  const { isRoundstarted, currentIssue } = useTypedSelector((state) => state.game);
  const [usersList, setUsersList] = useState<Array<IUserInfo>>([]);

  useEffect(() => {
    socket.getUsersInRoom(setUsersList);
  }, [usersList]);

  useEffect(() => {
    let isMounted = true;
    socket.deleteUserFromRoom(setUsersList);

    if (room?._id) {
      getRoomUsers(room._id).then((data) => {
        if (isMounted) setUsersList(data);
      });
    }

    return () => {
      isMounted = false;
    };
  }, [room]);

  useEffect(() => {
    socket.onRunRound(dispatch);
    socket.onStopRound(dispatch);
    socket.onSetActiveIssue(dispatch);
    currentSession.then((data) => data && dispatch(setUserCredentials(data)));
  }, []);

  useEffect(() => {}, [room]);

  return (
    <Container className={classes.gamePageContainer}>
      <SprintHeader />
      <Chat />
      <DealerPanel />

      <Grid container spacing={2}>
        <Grid item md={4}>
          <SectionHeader header="Issues" />
          <IssueList />
        </Grid>
        <Grid item className={classes.setupGrid} md={4}>
          <Timer />
          {isDealer && (
            <Container className={classes.setubGridButtons}>
              <Button
                className={classes.btnMargin}
                color="primary"
                variant="contained"
                disabled={currentIssue === ''}
                onClick={() => {
                  if (room && !isRoundstarted) socket.runRound(room?._id);
                  if (room && isRoundstarted) socket.stopRound(room?._id);
                }}
              >
                {isRoundstarted ? buttonTextConstants.RESTART_ROUND : buttonTextConstants.RUN_ROUND}
              </Button>
              <Button color="primary" variant="contained">
                {buttonTextConstants.NEXT_ISSUE}
              </Button>
            </Container>
          )}
        </Grid>
        <Grid item md={4}>
          <SectionHeader header="Users scores" />
          {usersList.map((user: IUserInfo) => (
            <Grid key={user._id} item sm={12}>
              <UserScore user={user} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export { GamePage };
