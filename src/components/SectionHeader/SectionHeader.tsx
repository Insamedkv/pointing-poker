import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './SectionHeader.styles';

interface ISectionHeaderProps {
  header: string;
}

const SectionHeader: React.FC<ISectionHeaderProps> = ({ header }) => {
  const classes = useStyles();

  return (
    <Typography className={classes.root} variant="h5">
      {header}
    </Typography>
  );
};

export default SectionHeader;
