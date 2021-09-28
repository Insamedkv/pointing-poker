import { Box, Button, Container, Input } from '@material-ui/core';
import { DeleteForeverOutlined } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { ICardItemProps } from 'defaultTypes';
import React, { FC, useState } from 'react';
import { changeCardValues } from 'reduxstore/settingsSlice/settingsSlice';
import { useStyles } from './CardBack.styles';

export const CardBack: FC<ICardItemProps> = ({
  handleClick,
  onClick,
  className,
  valueIndex,
  value,
  invisBtn = false,
}) => {
  const classes = useStyles();
  const [valueChange, setValueChanged] = useState(`${value}`);
  const [disabledBtn, setDisabledBtn] = useState(true);
  const dispatch = useDispatch();

  const changeValue = () => {
    if (handleClick) {
      handleClick(false);
    }
    dispatch(changeCardValues({ value: valueChange, index: valueIndex }));
  };

  return (
    <Container className={className}>
      <Input
        className={classes.input}
        onChange={(event) => {
          setDisabledBtn(event.target.value === '');
          setValueChanged(event.target.value);
        }}
        value={valueChange}
      />

      <Box className={classes.wrapForBtn}>
        <Button className={classes.btnSubmit} onClick={changeValue} disabled={disabledBtn}>
          Submit
        </Button>
        <Button
          className={classes.btnCancel}
          onClick={() => {
            if (handleClick) handleClick(false);
          }}
        >
          Cancel
        </Button>
      </Box>
      <DeleteForeverOutlined className={!invisBtn ? classes.cancelChages : classes.invisibleBTN} onClick={onClick} />
    </Container>
  );
};
