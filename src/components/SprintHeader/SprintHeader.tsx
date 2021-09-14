import React, { useState } from 'react';
import { Container, IconButton, Typography } from '@material-ui/core';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { IIssue } from 'defaultTypes';
import { useStyles } from './SprintHeader.styles';

interface ISprintHeaderProps {
  sprintId: string;
  issuesList: Array<IIssue>;
}

const SprintHeader: React.FC<ISprintHeaderProps> = ({ sprintId, issuesList }) => {
  const classes = useStyles();
  const baseTitle = `Sprint ${sprintId} planing, ISSUES: ${issuesList.map((issue) => issue.issueName).join(', ')}.`;
  const [title, setTitle] = useState(baseTitle);

  const editTitle = () => {};

  return (
    <>
      <Container className={classes.container}>
        <Typography variant="h3" className={classes.root}>
          {title}
        </Typography>
        <IconButton aria-label="edit" className={classes.editButton} size="small">
          <EditOutlinedIcon className={classes.editButton} />
        </IconButton>
      </Container>
    </>
  );
};

export default SprintHeader;
