import React, { useEffect, useState } from 'react';
import { Container, IconButton, InputLabel, TextField, Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { updateRoomTitle } from 'services/httpRoom';
import { useStyles } from './SprintHeader.styles';
import { socket } from '../../index';

const SprintHeader: React.FC = () => {
  const classes = useStyles();
  const roomTitle = useTypedSelector((state) => state.currentUser.room?.roomTitle);
  const roomId = useTypedSelector((state) => state.currentUser.room?._id);
  const gameStatus = useTypedSelector((state) => state.currentUser.room?.gameStatus);
  const [newTitle, setNewTitle] = useState('');
  const { isDealer } = useTypedSelector((state) => state.currentUser);
  const isGameStarted = gameStatus === 'started';

  useEffect(() => {
    socket.onTitleUpdate(setNewTitle);
  }, [roomId]);

  useEffect(() => {
    if (roomTitle) setNewTitle(roomTitle);
  }, [roomTitle]);

  const editTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
  };

  return (
    <>
      <Container className={classes.container}>
        {isDealer && !isGameStarted ? (
          <>
            <Typography variant="h3" className={classes.root}>
              <InputLabel className={classes.inputLabel}>
                <TextField
                  name="issueName"
                  className={classes.input}
                  fullWidth
                  onChange={editTitle}
                  value={newTitle || ''}
                />
              </InputLabel>
            </Typography>
            <IconButton
              aria-label="edit"
              className={classes.confirmButton}
              size="small"
              onClick={() => {
                if (roomId) updateRoomTitle(roomId, newTitle);
              }}
            >
              <CheckIcon className={classes.confirmButton} />
            </IconButton>
          </>
        ) : (
          <Typography variant="h3" className={classes.root}>
            {newTitle}
          </Typography>
        )}
      </Container>
    </>
  );
};

export default SprintHeader;
