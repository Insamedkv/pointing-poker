import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './SectionHeader.styles';

interface ISectionHeaderProps {
  header: string;
  withoutColon?: true;
}

const SectionHeader: React.FC<ISectionHeaderProps> = ({ header, withoutColon }) => {
  const classes = useStyles();
  const fullHeader = withoutColon ? header : `${header}:`;

  return (
    <Typography className={classes.root} variant="h6">
      {fullHeader}
    </Typography>
  );
};

export default SectionHeader;
