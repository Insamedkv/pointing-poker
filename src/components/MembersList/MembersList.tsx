import React from 'react';
import { Container, Grid } from '@material-ui/core';
import PersonPanel from 'components/PersonPanel';
import * as fakeData from 'utils/fakeData/fakeUser.json';
import { IUserInfo } from 'defaultTypes';

const MembersList: React.FC = () => {
  return (
    <Container component="section">
      <Grid container spacing={4}>
        {fakeData.users.map((user: IUserInfo) => (
          <Grid key={user.firstName} item sm={4}>
            <PersonPanel userInfo={user} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MembersList;
