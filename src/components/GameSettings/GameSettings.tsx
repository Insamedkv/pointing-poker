import { Container, FormControlLabel, Switch } from '@material-ui/core';
import CustomInput from 'components/CustomInput';
import React from 'react';

const GameSettings: React.FC = () => {
  return (
    <Container component="section">
      <FormControlLabel
        control={<Switch name="asObserver" color="primary" onChange={() => {}} />}
        label="Scrum master as player:"
        labelPlacement="start"
      />
      <FormControlLabel
        control={<Switch name="asObserver" color="primary" onChange={() => {}} />}
        label="Changing card in round end:"
        labelPlacement="start"
      />
      <FormControlLabel
        control={<Switch name="asObserver" color="primary" onChange={() => {}} />}
        label="Is timer needed:"
        labelPlacement="start"
      />
      <FormControlLabel control={<CustomInput input={{ label: '' }} />} label="Score type:" labelPlacement="start" />
    </Container>
  );
};

export default GameSettings;
