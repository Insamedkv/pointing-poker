import { Button, Container, Input } from '@material-ui/core';
import { ICardItemProps } from 'defaultTypes';
import React, { FC, useState } from 'react';
import { useStyles } from './CardBack.styles';

export const CardBack: FC<ICardItemProps> = ({ className, onSubmit, valueIndex, value }) => {
  const classes = useStyles();
  const [valueChange, setValueChanged] = useState(`${value}`);
  const [disabledBtn, setDisabledBtn] = useState<boolean>(false);

  return (
    <Container className={className}>
      <Input
        className={classes.input}
        onChange={(event) => {
          setValueChanged(event.target.value);
          if (valueChange !== '') {
            setDisabledBtn(false);
          } else {
            setDisabledBtn(true);
          }
        }}
        value={valueChange}
      />
      <Button
        className={classes.btn}
        onClick={() => {
          if (onSubmit) onSubmit(valueIndex, valueChange);
        }}
        disabled={disabledBtn}
      >
        Submit
      </Button>
    </Container>
  );
};
