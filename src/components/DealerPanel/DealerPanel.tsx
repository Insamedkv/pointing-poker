import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import LinkToLobby from 'components/LinkToLobby';
import PersonPanel from 'components/PersonPanel';
import CustomButton from 'components/CustomButton';
import { IUserInfo } from 'defaultTypes';
import { buttonTextConstants } from 'utils/buttonTextConstants';
import { getRoomCreator } from 'services/httpRoom';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useStyles } from './DealerPanel.styles';

const DealerPanel: React.FC = () => {
  const classes = useStyles();
  const { room, isDealer } = useTypedSelector((state) => state.currentUser);
  const [userInfo, setUserInfo] = useState<IUserInfo>();

  const link = `${room?._id}`;

  useEffect(() => {
    if (room?._id) {
      getRoomCreator(room._id).then((creator) => {
        setUserInfo(creator);
      });
    }
  }, [room]);

  const startGame = () => {};
  const cancelGame = () => {};

  return (
    <div className={classes.dealerPanel}>
      <Grid container alignItems="center" justifyContent="space-between" spacing={4}>
        <Grid item md={6} sm={12}>
          <Container>
            <Typography variant="subtitle1">Scrum master:</Typography>
            {userInfo && <PersonPanel userInfo={userInfo} />}
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
                />
                <CustomButton
                  className={classes.btnPadding}
                  buttonCaption={buttonTextConstants.CANCEL_GAME}
                  color="secondary"
                  variant="outlined"
                  size="medium"
                />
              </>
            ) : (
              <CustomButton
                className={classes.btnPadding}
                buttonCaption={buttonTextConstants.EXIT}
                color="secondary"
                variant="outlined"
                size="medium"
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
