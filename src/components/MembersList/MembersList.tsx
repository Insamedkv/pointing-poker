import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import PersonPanel from 'components/PersonPanel';
import { updateRoomUsers } from 'reduxstore/userSlice';
import { getRoomUsers } from 'services/httpRoom';
import { IUserInfo } from 'defaultTypes';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { socket } from '../../index';

const MembersList: React.FC = () => {
  const { room } = useTypedSelector((state) => state.currentUser);
  const [usersList, setUsersList] = useState<Array<IUserInfo>>([]);

  useEffect(() => {
    socket.getUsersInRoom(setUsersList);
  }, []);

  useEffect(() => {
    let isMounted = true;
    socket.deleteUserFromRoom(setUsersList);

    if (room?._id) {
      // socket.onJoin(room._id);
      getRoomUsers(room._id).then((data) => {
        if (isMounted) setUsersList(data);
      });
    }
    return () => {
      isMounted = false;
    };
  }, [room]);

  return (
    <Container component="section">
      <Grid container spacing={4}>
        {usersList.map((user: IUserInfo) => (
          <Grid key={user._id} item sm={4}>
            <PersonPanel userInfo={user} avaSize="medium" />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MembersList;
