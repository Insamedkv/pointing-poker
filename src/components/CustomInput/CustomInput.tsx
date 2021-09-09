import React, { useRef, useState } from 'react';
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
  const [fileName, setFileName] = useState('Choose file');
  const myInput = useRef(null);

  const inputFile = input.type === 'file' ? document.createElement('input') : null;

  const getFileName = () => {
    const name = inputFile?.value.split('\\').pop();
    console.log(myInput.current?.lastChild);
  };

  if (inputFile) {
    inputFile.setAttribute('type', 'file');
    inputFile.addEventListener('change', () => getFileName());
  }

  const choseFile = () => {
    inputFile?.click();
  };
  const buttonAction = input.type === 'file' ? choseFile : button?.onClick;

  return (
    <div>
      <InputLabel className={classes.inputLabel}>{input.label}:</InputLabel>
      <Container className={classes.container}>
        <Input
          ref={myInput}
          fullWidth
          color="primary"
          className={requireClass}
          classes={{ root: classes.root, focused: classes.focused, error: classes.inputError }}
          disableUnderline
          required={input.required}
          error={isError}
          type={input.type === 'file' ? 'text' : input.type || 'text'}
          onChange={onChange}
          readOnly={input.type === 'file'}
        />
        {button && (
          <CustomButton
            className={classes.inputButton}
            buttonCaption={button.buttonCaption}
            variant={button.variant || 'contained'}
            color={button.color || 'primary'}
            onClick={buttonAction}
          />
        )}
      </Container>
    </div>
  );
};

export default CustomInput;
