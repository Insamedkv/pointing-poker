import { Container } from '@material-ui/core';
import React from 'react';
import { IInput } from '../../../../../../defaultTypes';
import Avatara from '../../../../../Avatara';
import CustomInput from '../../../../../CustomInput';

const LobbyContent: React.FC = () => {
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
  const chooseAvatar: IInput = {
    label: 'Image',
    type: 'file',
    required: false,
  };

  return (
    <>
      <CustomInput input={firstNameInput} />
      <CustomInput input={lastNameInput} />
      <CustomInput input={jobPositionInput} />
      <CustomInput input={chooseAvatar} button={{ buttonCaption: 'File' }} />
      <Container>
        <Avatara avatar={{ lastName: 'vova', firstName: 'sawa', size: 'large' }} />
      </Container>
    </>
  );
};

export { LobbyContent };
