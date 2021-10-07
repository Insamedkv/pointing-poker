import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import { updateRoomUsers } from 'reduxstore/userSlice';
import PersonPanel from 'components/PersonPanel';
import { getRoomUsers } from 'services/httpRoom';
import { IUserInfo } from 'defaultTypes';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { socket } from '../../index';

const MembersList: React.FC = () => {
  const dispatch = useDispatch();
  const { room } = useTypedSelector((state) => state.currentUser);
  const [usersIdList, setUsersIdList] = useState<Array<string>>([]);
  const [usersList, setUsersList] = useState<Array<IUserInfo>>([]);

  useEffect(() => {
    socket.getUsersInRoom(setUsersIdList);
    socket.deleteUserFromRoom(setUsersIdList);
  }, []);

  useEffect(() => {
    if (room?._id) {
      getRoomUsers(room._id).then((data) => {
        setUsersList(data);
        dispatch(updateRoomUsers(data));
      });
    }
  }, [room?._id]);

  useEffect(() => {
    let isMounted = true;

    if (room?._id) {
      getRoomUsers(room._id).then((data) => {
        if (isMounted) {
          setUsersList(data);
          dispatch(updateRoomUsers(data));
        }
      });
    }
    return () => {
      isMounted = false;
      // setUsers1List(usersList);
    };
  }, [usersIdList]);

  return (
    <Container component="section">
      <Grid container spacing={2}>
        {usersList.map((user: IUserInfo) => (
          <Grid key={user._id} item xs>
            <PersonPanel userInfo={user} avaSize="medium" />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MembersList;
