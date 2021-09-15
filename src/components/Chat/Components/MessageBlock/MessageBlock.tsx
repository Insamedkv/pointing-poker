import { Grid } from '@material-ui/core';
import PersonPanel from 'components/PersonPanel';
import { IUserInfo } from 'defaultTypes';
import React from 'react';

interface IMessageProps {
  user: IUserInfo;
  message: string;
}

const MessageBlock: React.FC<IMessageProps> = ({ user, message }) => {
  return (
    <>
      <Grid item sm={3}>
        <PersonPanel userInfo={user} />
      </Grid>
      <Grid item>
        <p>{message}</p>
      </Grid>
    </>
  );
};

export default MessageBlock;
