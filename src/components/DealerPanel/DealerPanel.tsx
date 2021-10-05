import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { Container, Grid, Typography } from '@material-ui/core';
import LinkToLobby from 'components/LinkToLobby';
import PersonPanel from 'components/PersonPanel';
import CustomButton from 'components/CustomButton';
import { IUserInfo } from 'defaultTypes';
import { buttonTextConstants } from 'utils/buttonTextConstants';
import { deleteRoom, getRoomCreator, leaveRoom, setGameStatus, setRoomRules } from 'services/httpRoom';
import { Rules } from 'services/serviceTypes';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useStyles } from './DealerPanel.styles';
import { socket } from '../../index';

const DealerPanel: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { room, isDealer } = useTypedSelector((state) => state.currentUser);
  const { cardTypes } = useTypedSelector((state) => state.settings);
  const rules = useTypedSelector((state) => state.settings);
  const [userInfo, setUserInfo] = useState<IUserInfo>();

  const link = `${room?._id}`;

  const cancelGame = () => {
    if (room?._id) deleteRoom(room._id);
  };

  const stopGame = () => {
    if (room?._id) {
      socket.finishGame(room?._id);
    }
  };

  const exitGame = async () => {
    if (room?._id)
      leaveRoom(room._id).then(() => {
        window.location.href = window.location.origin;
      });
  };

  useEffect(() => {
    socket.onPlay(dispatch);
  }, []);

  useEffect(() => {
    let isMounted = true;
    if (room?._id) {
      getRoomCreator(room._id).then((creator) => {
        if (isMounted) setUserInfo(creator);
      });
    }
    return () => {
      isMounted = false;
    };
  }, [room]);

  const startGame = () => {
    const roundTime = rules.time.minutes * 60 + rules.time.seconds;
    const arrayOfValues = cardTypes.map((card) => card.value);
    const laws: Rules = {
      scrumMasterAsAPlayer: rules.scrumMasterAsAPlayer,
      newUsersEnter: rules.newUsersEnter,
      autoRotateCardsAfterVote: rules.autoRotateCardsAfterVote,
      changingCardInEnd: rules.changingCardInEnd,
      isTimerNeeded: rules.isTimerNeeded,
      shortScoreType: rules.shortScoreType,
      cardType: arrayOfValues,
      roundTime,
    };

    if (room) {
      setRoomRules(room._id, laws);
      setGameStatus(room._id, true);
      socket.play(room._id);
    }
  };

  return (
    <div className={classes.dealerPanel}>
      <Grid container alignItems="center" justifyContent="space-between" spacing={4}>
        <Grid item md={6} sm={12} xs={12}>
          <Container>
            <Typography variant="subtitle1">Scrum master:</Typography>
            {userInfo && <PersonPanel userInfo={userInfo} avaSize="large" />}
          </Container>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Container className={classes.btnContainer}>
            {isDealer ? (
              <>
                {!room?.isGameStarted && (
                  <CustomButton
                    className={classes.btnPadding}
                    buttonCaption={buttonTextConstants.START_GAME}
                    size="medium"
                    onClick={startGame}
                  />
                )}
                <CustomButton
                  className={classes.btnPadding}
                  buttonCaption={room?.isGameStarted ? buttonTextConstants.STOP_GAME : buttonTextConstants.CANCEL_GAME}
                  color="secondary"
                  variant="outlined"
                  size="medium"
                  onClick={room?.isGameStarted ? stopGame : cancelGame}
                />
              </>
            ) : (
              <CustomButton
                className={classes.btnPadding}
                buttonCaption={buttonTextConstants.EXIT}
                color="secondary"
                variant="outlined"
                size="medium"
                onClick={exitGame}
              />
            )}
          </Container>
        </Grid>
        {!room?.isGameStarted && isDealer && (
          <Grid item sm={12}>
            <LinkToLobby link={link} />
          </Grid>
        )}
      </Grid>
      {link && room?.isGameStarted && <Redirect to={`/game/${link}`} />}
    </div>
  );
};

export default DealerPanel;
