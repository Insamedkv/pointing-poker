import { Container, Typography, Switch, FormControlLabel } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { IInput } from '../../../../../../defaultTypes';
import { useTypedSelector } from '../../../../../../hooks/useTypedSelector';
import { buttonTextConstants } from '../../../../../../utils/buttonTextConstants';
import Avatara from '../../../../../Avatara';
import CustomButton from '../../../../../CustomButton';
import CustomInput from '../../../../../CustomInput';
import FileChooser from '../../../../../FileChooser/FileChooser';
import { useStyles } from '../../../../ModalWindow.styles';

interface IUserData {
  firstName: string;
  lastName: string;
  asObserver: boolean;
  position?: string;
  avatar?: string;
}

const LobbyContent: React.FC = () => {
  const userState: IUserData = {
    lastName: '',
    firstName: '',
    position: '',
    avatar: '',
    asObserver: false,
  };
  const { modal } = useTypedSelector((state) => state);
  const classes = useStyles();
  const [userData, setUserData] = useState<IUserData>(userState);
  const [blobImage, setBlobImage] = useState<ArrayBuffer | string | null>();

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

  useEffect(() => console.log(userData), [userData]);

  return (
    <>
      <Container className={classes.modalHeaderContainer}>
        <Typography className={classes.modalHeader} variant="h2">
          {modal.title}:
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
        value={userData.avatar}
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
        <CustomButton className={classes.btn} buttonCaption={buttonTextConstants.CONFIRM} />
        <CustomButton className={classes.btn} buttonCaption={buttonTextConstants.CANCEL} variant="outlined" />
      </Container>
    </>
  );
};

export { LobbyContent };
