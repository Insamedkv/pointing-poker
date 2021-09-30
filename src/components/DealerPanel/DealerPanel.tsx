import React, { useEffect, useState } from 'react';
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

const DealerPanel: React.FC = () => {
  const classes = useStyles();
  const { room, isDealer } = useTypedSelector((state) => state.currentUser);
  const rules = useTypedSelector((state) => state.settings);
  const [userInfo, setUserInfo] = useState<IUserInfo>();

  const link = `${room?._id}`;

  const cancelGame = () => {
    if (room?._id) deleteRoom(room._id);
  };

  const exitGame = async () => {
    if (room?._id)
      leaveRoom(room._id).then(() => {
        window.location.href = window.location.origin;
      });
  };

  useEffect(() => {
    if (room?._id) {
      getRoomCreator(room._id).then((creator) => {
        setUserInfo(creator);
      });
    }
  }, [room]);

  const startGame = () => {
    const roundTime = rules.time.minutes * 60 + rules.time.seconds;
    const laws: Rules = {
      scrumMasterAsAPlayer: rules.scrumMasterAsAPlayer,
      newUsersEnter: rules.newUsersEnter,
      autoRotateCardsAfterVote: rules.autoRotateCardsAfterVote,
      changingCardInEnd: rules.changingCardInEnd,
      isTimerNeeded: rules.isTimerNeeded,
      shortScoreType: rules.shortScoreType,
      cardType: [],
      roundTime,
    };

    if (room) {
      setRoomRules(room._id, laws);
      setGameStatus(room._id, true);
    }
  };

  return (
    <div className={classes.dealerPanel}>
      <Grid container alignItems="center" justifyContent="space-between" spacing={4}>
        <Grid item md={6} sm={12}>
          <Container>
            <Typography variant="subtitle1">Scrum master:</Typography>
            {userInfo && <PersonPanel userInfo={userInfo} avaSize="large" />}
          </Container>
        </Grid>
        <Grid item md={6} sm={12}>
          <Container className={classes.btnContainer}>
            {isDealer ? (
              <>
                <CustomButton
                  className={classes.btnPadding}
                  buttonCaption={buttonTextConstants.START_GAME}
                  size="medium"
                  onClick={startGame}
                />
                <CustomButton
                  className={classes.btnPadding}
                  buttonCaption={buttonTextConstants.CANCEL_GAME}
                  color="secondary"
                  variant="outlined"
                  size="medium"
                  onClick={cancelGame}
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
        <Grid item sm={12}>
          <LinkToLobby link={link} />
        </Grid>
      </Grid>
    </div>
  );
};

export default DealerPanel;
