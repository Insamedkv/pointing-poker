import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import PersonPanel from 'components/PersonPanel';
import { updateRoomUsers } from 'reduxstore/userSlice';
import * as fakeData from 'utils/fakeData/fakeUser.json';
import { getRoomUsers } from 'services/httpRoom';
import { IUserInfo } from 'defaultTypes';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { socket } from '../../index';

const MembersList: React.FC = () => {
  const { room } = useTypedSelector((state) => state.currentUser);
  const [usersList, setUsersList] = useState<Array<IUserInfo>>([]);

  socket.getUsersInRoom(setUsersList);

  useEffect(() => {
    if (room?._id) {
      socket.onJoin(room._id);
      getRoomUsers(room._id).then((data) => setUsersList(data));
    }
  }, [room]);

  return (
    <Container component="section">
      <Grid container spacing={4}>
        {usersList.map((user: IUserInfo) => (
          <Grid key={user._id} item sm={4}>
            <PersonPanel userInfo={user} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MembersList;
