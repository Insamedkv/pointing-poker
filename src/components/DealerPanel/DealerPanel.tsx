import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import LinkToLobby from 'components/LinkToLobby';
import PersonPanel from 'components/PersonPanel';
import CustomButton from 'components/CustomButton';
import { IUserInfo } from 'defaultTypes';
import { buttonTextConstants } from 'utils/buttonTextConstants';
import { useStyles } from './DealerPanel.styles';

const DealerPanel = () => {
  const classes = useStyles();
  const userInfo: IUserInfo = {
    firstName: 'David',
    lastName: 'Blane',
    position: 'Rabotiaga',
    imgPath: '',
  };

  const link = 'https://linkatolobby.com/room/fdsfa-kjkkgh-sdgfsd';

  return (
    <div className={classes.dealerPanel}>
      <Grid container alignItems="center" justifyContent="space-between" spacing={4}>
        <Grid item md={6} sm={12}>
          <Container>
            <Typography variant="subtitle1">Scrum master:</Typography>
            <PersonPanel userInfo={userInfo} />
          </Container>
        </Grid>
        <Grid item md={6} sm={12}>
          <Container className={classes.btnContainer}>
            <CustomButton className={classes.btnPadding} buttonCaption={buttonTextConstants.START_GAME} size="medium" />
            <CustomButton
              className={classes.btnPadding}
              buttonCaption={buttonTextConstants.CANCEL_GAME}
              color="secondary"
              variant="outlined"
              size="medium"
            />
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
