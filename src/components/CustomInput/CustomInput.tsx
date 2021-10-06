import React, { useState } from 'react';
import { Container, Input, InputLabel, Typography } from '@material-ui/core';
import { useStyles } from './CustomInput.styles';
import CustomButton from '../CustomButton';
import { IButton, IInput } from '../../defaultTypes';

interface IInputProps {
  input: IInput;
  name?: string;
  button?: IButton;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  errorMessage?: string;
}

const CustomInput: React.FC<IInputProps> = ({ input, button, name, onChange, errorMessage }) => {
  const classes = useStyles();
  const requireClass = input.required ? classes.requiredField : '';

  return (
    <>
      {input.label && (
        <InputLabel className={classes.inputLabel}>
          {input.label}:
          {errorMessage && (
            <Typography component="span" style={{ color: 'red' }}>
              {errorMessage}
            </Typography>
          )}
        </InputLabel>
      )}
      <Container className={classes.container}>
        <Input
          fullWidth
          color="primary"
          className={requireClass}
          readOnly={input.readOnly}
          classes={{ root: classes.root, focused: classes.focused, error: classes.inputError }}
          disableUnderline
          name={name}
          required={input.required}
          error={!!errorMessage}
          type={input.type || 'text'}
          onChange={onChange}
          value={input.value}
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
