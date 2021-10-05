import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { buttonTextConstants } from 'utils/buttonTextConstants';
import CustomButton from 'components/CustomButton';
import { closeModal } from 'reduxstore/modalSlice/modalSlice';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { IUserInfo } from 'defaultTypes';

const AdmitPlayer: React.FC = () => {
  const dispatch = useDispatch();
  const userName = useTypedSelector((state) => state.modal.player as IUserInfo);

  const admitPlayer = () => {};
  const rejectPlayer = () => {};

  return (
    <>
      <Container>
        <Typography variant="h2">Admit player?</Typography>
      </Container>

      <Container>
        <Typography variant="body1">{userName?.firstName}</Typography>
      </Container>

      <Container>
        <CustomButton buttonCaption={buttonTextConstants.YES} onClick={admitPlayer} />
        <CustomButton
          buttonCaption={buttonTextConstants.NO}
          variant="outlined"
          onClick={() => {
            dispatch(closeModal());
            rejectPlayer();
          }}
        />
      </Container>
    </>
  );
};

export default AdmitPlayer;
