import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import PersonPanel from 'components/PersonPanel';
import { getRoomUsers } from 'services/httpRoom';
import { IUserInfo } from 'defaultTypes';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { socket } from '../../index';

const MembersList: React.FC = () => {
  const { room } = useTypedSelector((state) => state.currentUser);
  const [usersList, setUsersList] = useState<Array<IUserInfo>>([]);

  useEffect(() => {
    socket.getUsersInRoom(setUsersList);
    socket.deleteUserFromRoom(setUsersList);
  }, []);

  useEffect(() => {
    let isMounted = true;

    if (room?._id) {
      getRoomUsers(room._id).then((data) => {
        if (isMounted) {
          setUsersList(data);
        }
      });
    }
    return () => {
      isMounted = false;
      setUsersList([]);
    };
  }, [room]);

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
