import React from 'react';
import { Avatar } from '@material-ui/core';
import { useStyles } from './Avatara.styles';
import { IAvataraInfo } from '../../defaultTypes';

interface IAvataraProps {
  avatar: IAvataraInfo;
}

const Avatara: React.FC<IAvataraProps> = ({ avatar }) => {
  const classes = useStyles();
  const { firstName, lastName, src } = avatar;
  const shortName = `${firstName.slice(0, 1)}${lastName?.slice(0, 1)}`.toUpperCase();

  return (
    <>
      <Avatar
        src={src as string}
        alt={lastName}
        className={classes[avatar.size]}
        classes={{ root: classes.root, colorDefault: classes.colorDefault }}
      >
        {shortName}
      </Avatar>
    </>
  );
};

export default Avatara;
