import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
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
import IssueCard from 'components/IssueCard';
import { getRoomBets, getRoomUsers, setGameStatus } from 'services/httpRoom';
import { CardItem } from 'components/AddCardValues/Component/CardItem';
import UserScore from 'components/UserScore';
import { Bet } from 'services/serviceTypes';
import { admitPlayerModal } from 'reduxstore/modalSlice/modalSlice';
import { setBet, setUsersBets } from 'reduxstore/gameSlice';
import Statistic from 'components/Statistic';
import { useStyles } from './GamePage.styles';
import { socket } from '../index';

const GamePage: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentSession = restoreSession();
  const { room, isDealer, userId, avaliableUsers } = useTypedSelector((state) => state.currentUser);
  const isTimerNeeded = room?.rules[0]?.isTimerNeeded;
  const { isRoundstarted, currentIssue, userBets } = useTypedSelector((state) => state.game);
  const [usersList, setUsersList] = useState<Array<IUserInfo>>([]);
  const [cardList, setCardList] = useState<Array<number | string>>([]);
  const history = useHistory();

  useEffect(() => {
    socket.getUsersInRoom(setUsersList);
  }, []);

  useEffect(() => {
    if (isDealer) {
      const [user] = usersList.filter((item) => {
        const isNewUser = avaliableUsers.includes(item._id as string);
        return !isNewUser;
      });
      console.log('NEW USER:', user);
      dispatch(admitPlayerModal(user));
    }
  }, [usersList]);

  useEffect(() => {
    let isMounted = true;
    socket.deleteUserFromRoom(setUsersList);

    if (room?._id) {
      setGameStatus(room._id, true);
      getRoomUsers(room._id).then((data) => {
        if (isMounted && room.rules[0]) {
          setUsersList(data);
          setCardList(room.rules[0].cardType);
        }
      });
    }

    return () => {
      isMounted = false;
    };
  }, [room]);

  useEffect(() => {
    const toResults = `/results`;
    socket.onRunRound(dispatch);
    socket.onStopRound(dispatch);
    socket.onSetActiveIssue(dispatch);
    socket.onFinishGame(history, toResults);
    socket.onBlur();
    currentSession.then((data) => data && dispatch(setUserCredentials(data)));
  }, []);

  useEffect(() => {
    if (room?.rules[0]?.autoRotateCardsAfterVote) {
      socket.onBet(dispatch);
    }
  }, [room]);

  useEffect(() => {
    if (currentIssue !== '') {
      getRoomBets(currentIssue).then((data) => {
        dispatch(setUsersBets(data));
      });
    }
  }, [currentIssue]);

  const setActive = (value: string): void => {
    const betObj: Bet = {
      content: value,
      issueId: currentIssue,
      roomId: room?._id || '',
      userId,
    };
    if (isRoundstarted) {
      dispatch(setBet(value));
      socket.bet(betObj);
      // if (room?.rules[0]?.autoRotateCardsAfterVote) {
      //   socket.bet(betObj);
      // }
    }
  };

  return (
    <Container className={classes.gamePageContainer}>
      <SprintHeader />
      <Chat />
      <DealerPanel />

      <Grid container className={classes.setupWidth} spacing={4}>
        <Grid item xs>
          {/* <Grid item sm> */}
          <SectionHeader header="Issues" />
          <IssueList />
          <IssueCard mode="create" />
        </Grid>
        <Grid item className={classes.setupGrid} xs>
          {/* <Grid item className={classes.setupGrid} md> */}
          {isTimerNeeded && <Timer />}
          {isDealer && (
            <Container className={classes.setubGridButtons}>
              <Button
                className={classes.btnMargin}
                color="primary"
                variant="contained"
                disabled={currentIssue === ''}
                onClick={() => {
                  if (room && !isRoundstarted) {
                    socket.runRound(room?._id, currentIssue);
                    dispatch(setBet(''));
                  }
                  if (room && isRoundstarted) {
                    socket.stopRound(room?._id);
                    getRoomBets(currentIssue).then((data) => {
                      dispatch(setUsersBets(data));
                      console.log('We get it:', data);
                    });
                  }
                }}
              >
                {isRoundstarted ? buttonTextConstants.STOP_ROUND : buttonTextConstants.RUN_ROUND}
              </Button>
              {/* <Button color="primary" variant="contained">
                {buttonTextConstants.NEXT_ISSUE}
              </Button> */}
            </Container>
          )}
        </Grid>

        <Grid item xs>
          {/* <USER SCORES> */}
          <SectionHeader header="Users scores" />
          {usersList.map((user: IUserInfo) => (
            <Grid key={user._id} item>
              <UserScore user={user} bet={userBets.find((userBet) => userBet.userId === user._id)?.content} />
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Statistic />

      {isRoundstarted && (
        <Grid container spacing={1} className={classes.cardContainer}>
          {cardList.map((value, index) => (
            <Grid key={index} item xs={3}>
              <CardItem
                name={value as string}
                className={classes.cardStyles}
                onClick={() => setActive(value as string)}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export { GamePage };
