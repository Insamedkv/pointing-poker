import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Typography, Switch, FormControlLabel } from '@material-ui/core';
import { buttonTextConstants } from 'utils/buttonTextConstants';
import { IInput } from 'defaultTypes';
import { useStyles } from 'components/Modal/ModalWindow.styles';
import Avatara from 'components/Avatara';
import CustomButton from 'components/CustomButton';
import CustomInput from 'components/CustomInput';
import FileChooser from 'components/FileChooser';
import { useDispatch } from 'react-redux';
import { closeModal } from 'reduxstore/modalSlice/modalSlice';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { setUserCredentials } from 'reduxstore/userSlice';
import { signup } from 'services/httpRoom';
import { socket } from '../../../../../../index';

interface IUserData {
  firstName: string;
  lastName: string;
  asObserver: boolean;
  position?: string;
  avatar?: string | ArrayBuffer;
  roomId?: string;
  socketId?: string;
}

const userState: IUserData = {
  lastName: '',
  firstName: '',
  position: '',
  avatar: '',
  asObserver: false,
};

const LobbyContent: React.FC = () => {
  const modalState = useTypedSelector((state) => state.modal);
  const dispatch = useDispatch();
  const [lobbyLink, setLobbyLink] = useState('');
  const [socketId, setSocketId] = useState('');

  const classes = useStyles();
  const [userData, setUserData] = useState<IUserData>(userState);
  const [blobImage, setBlobImage] = useState<ArrayBuffer | string | null>();

  const createRoom = async () => {
    const player: IUserData = {
      ...userData,
      avatar: blobImage || '',
      roomId: modalState.roomId,
      socketId,
    };

    const response = await signup(player);
    const sessionData = { roomId: response.room._id, userId: response.userData._id };

    localStorage.setItem('poker-auth', response.authorization);
    localStorage.setItem('poker-session', JSON.stringify(sessionData));

    setLobbyLink(`/lobby/${modalState.roomId || response.room._id}`);
    dispatch(setUserCredentials(response));
    dispatch(closeModal());
  };

  const firstNameInput: IInput = {
    label: 'Your first name',
    type: 'text',
    required: true,
  };

  const lastNameInput: IInput = {
    label: 'Your last name',
    type: 'text',
    required: false,
  };

  const jobPositionInput: IInput = {
    label: 'Your job position',
    type: 'text',
    required: false,
  };

  const updateUserData = (name: string, value: string | boolean) => {
    setUserData({ ...userData, [name]: value });
  };

  const getDataFromInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    updateUserData(name, value);
  };

  const setImage = (src: ArrayBuffer | string | null) => {
    setBlobImage(src);
  };

  useEffect(() => {
    const cosketId = socket.getSocketId();
    setSocketId(cosketId);
  }, []);

  return (
    <>
      <Container className={classes.modalHeaderContainer}>
        <Typography className={classes.modalHeaderAlternative} variant="h2">
          Connect to Lobby:
        </Typography>
        <FormControlLabel
          control={
            <Switch
              name="asObserver"
              color="primary"
              onChange={(event) => updateUserData(event.target.name, event.target.checked)}
            />
          }
          label="Connect as observer"
          labelPlacement="start"
        />
      </Container>
      <CustomInput name="firstName" input={firstNameInput} onChange={getDataFromInput} />
      <CustomInput name="lastName" input={lastNameInput} onChange={getDataFromInput} />
      <CustomInput name="position" input={jobPositionInput} onChange={getDataFromInput} />
      <FileChooser
        fieldName="avatar"
        setImage={(src) => setImage(src)}
        getFile={(name, value) => updateUserData(name, value)}
        value={userData.avatar as string}
      />
      {(userData.firstName || blobImage) && (
        <Container className={classes.avatarBlock}>
          <Avatara
            avatar={{
              firstName: userData.firstName,
              lastName: userData.lastName,
              size: 'large',
              src: blobImage as ArrayBuffer,
            }}
          />
        </Container>
      )}
      <Container className={classes.buttonsBlock}>
        <CustomButton className={classes.btn} buttonCaption={buttonTextConstants.CONFIRM} onClick={createRoom} />
        <CustomButton
          className={classes.btn}
          buttonCaption={buttonTextConstants.CANCEL}
          variant="outlined"
          onClick={() => dispatch(closeModal())}
        />
      </Container>
      {lobbyLink && <Redirect to={lobbyLink} />}
    </>
  );
};

export { LobbyContent };
