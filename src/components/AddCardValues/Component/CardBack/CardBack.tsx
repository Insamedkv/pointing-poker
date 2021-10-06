import React, { FC, useState } from 'react';
import { Box, Button, Container, Input } from '@material-ui/core';
import { DeleteForeverOutlined } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { ICardItemProps } from 'defaultTypes';
import { addNewCard, changeCardValues } from 'reduxstore/settingsSlice/settingsSlice';
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
  const [valueChange, setValueChanged] = useState<string>(value || '');
  const dispatch = useDispatch();

  const changeValue = () => {
    if (handleClick) handleClick(false);

    if (!valueIndex) {
      dispatch(addNewCard(valueChange));
      setValueChanged('');
      return;
    }

    dispatch(changeCardValues({ value: valueChange, id: valueIndex as string }));
  };

  return (
    <Container className={className}>
      <Input
        className={classes.input}
        autoFocus
        classes={{ input: classes.centerateText }}
        onChange={(event) => {
          setValueChanged(event.target.value);
        }}
        value={valueChange}
      />

      <Box className={classes.wrapForBtn}>
        <Button
          className={classes.btnStyle}
          variant="contained"
          color="primary"
          onClick={changeValue}
          disabled={valueChange === ''}
        >
          Submit
        </Button>
        <Button
          className={classes.btnStyle}
          color="primary"
          variant="outlined"
          onClick={() => {
            if (handleClick) handleClick(false);
            if (!valueIndex) setValueChanged('');
          }}
        >
          Cancel
        </Button>
      </Box>
      <DeleteForeverOutlined className={!invisBtn ? classes.cancelChages : classes.invisibleBTN} onClick={onClick} />
    </Container>
  );
};
