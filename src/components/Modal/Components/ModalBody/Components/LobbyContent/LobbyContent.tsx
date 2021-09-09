import { Container } from '@material-ui/core';
import React, { useState } from 'react';
import { IInput } from '../../../../../../defaultTypes';
import Avatara from '../../../../../Avatara';
import CustomInput from '../../../../../CustomInput';
import FileChooser from '../../../../../FileChooser/FileChooser';

interface IUserData {
  lastName: string;
  firstName: string;
  position?: string;
  avatar?: string;
}

const LobbyContent: React.FC = () => {
  const [userData, setUserData] = useState<IUserData>({ lastName: '', firstName: '' });

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

  return (
    <>
      <CustomInput
        input={firstNameInput}
        onChange={(event) => setUserData({ lastName: '', firstName: event.target.value })}
      />
      <CustomInput input={lastNameInput} />
      <CustomInput input={jobPositionInput} />
      <FileChooser />
      <Container>
        <Avatara avatar={{ size: 'large', lastName: userData.lastName, firstName: userData.firstName }} />
      </Container>
    </>
  );
};

export { LobbyContent };
