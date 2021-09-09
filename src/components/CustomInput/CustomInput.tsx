import React, { useState } from 'react';
import { Container, Input, InputLabel } from '@material-ui/core';
import { useStyles } from './CustomInput.styles';
import CustomButton from '../CustomButton';
import { IButton, IInput } from '../../defaultTypes';

interface IInputProps {
  input: IInput;
  button?: IButton;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CustomInput: React.FC<IInputProps> = ({ input, button, onChange }) => {
  const classes = useStyles();
  const requireClass = input.required ? classes.requiredField : '';
  const [isError, setError] = useState(false);

  return (
    <>
      <InputLabel className={classes.inputLabel}>{input.label}:</InputLabel>
      <Container className={classes.container}>
        <Input
          fullWidth
          color="primary"
          className={requireClass}
          classes={{ root: classes.root, focused: classes.focused, error: classes.inputError }}
          disableUnderline
          required={input.required}
          error={isError}
          type={input.type || 'text'}
          onChange={onChange}
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
