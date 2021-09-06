import React, { useState } from 'react';
import { Container, Input, InputLabel } from '@material-ui/core';
import { useStyles } from './CustomInput.styles';
import CustomButton from '../CustomButton';
import { IButton } from '../../defaultTypes';

interface IInput {
  label: string;
  type?: 'text' | 'number' | 'file' | 'date';
  required?: boolean;
}

interface IInputProps {
  input: IInput;
  button?: IButton;
}

const CustomInput: React.FC<IInputProps> = ({ input, button }) => {
  const classes = useStyles();
  const [isError, setError] = useState(false);

  return (
    <>
      <InputLabel className={classes.inputLabel}>{input.label}:</InputLabel>
      <Container className={classes.container}>
        <Input
          fullWidth
          color="primary"
          classes={{ root: classes.root, focused: classes.focused, error: classes.inputError }}
          disableUnderline
          required={input.required}
          error={isError}
          type={input.type || 'text'}
        />
        {button && (
          <CustomButton
            className={classes.inputButton}
            buttonCaption={button.buttonCaption}
            variant={button.variant || 'contained'}
            color={button.color || 'primary'}
            onClick={button.onClick}
          />
        )}
      </Container>
    </>
  );
};

export default CustomInput;
