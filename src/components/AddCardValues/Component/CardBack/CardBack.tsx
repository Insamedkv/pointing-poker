import { Box, Button, Container, Input } from '@material-ui/core';
import { DeleteForeverOutlined } from '@material-ui/icons';
import { ICardItemProps } from 'defaultTypes';
import React, { FC, useState } from 'react';
import { useStyles } from './CardBack.styles';

export const CardBack: FC<ICardItemProps> = ({
  handleClick,
  onClick,
  className,
  onSubmit,
  valueIndex,
  value,
  invisBtn = false,
}) => {
  const classes = useStyles();
  const [valueChange, setValueChanged] = useState(`${value}`);
  const [disabledBtn, setDisabledBtn] = useState<boolean>(true);

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

      <Box className={classes.wrapForBtn}>
        <Button
          className={classes.btnSubmit}
          onClick={() => {
            if (onSubmit) onSubmit(valueIndex, valueChange);
          }}
          disabled={disabledBtn}
        >
          Submit
        </Button>
        <Button className={classes.btnCancel} onClick={handleClick}>
          Cancel
        </Button>
      </Box>
      <DeleteForeverOutlined className={!invisBtn ? classes.cancelChages : classes.invisibleBTN} onClick={onClick} />
    </Container>
  );
};
