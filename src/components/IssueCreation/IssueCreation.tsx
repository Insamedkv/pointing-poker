import React, { useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import IssueCard from 'components/IssueCard';
import * as data from 'utils/fakeData/fakeIssues.json';
import IssueList from 'components/IssueList';
import { IIssue } from 'defaultTypes';
import { useStyles } from './IssueCreation.styles';

const IssueCreation: React.FC = () => {
  const classes = useStyles();
  const [issues, setIssue] = useState(data.issues as Array<IIssue>);

  const addIssue = () => {
    const newIssue: IIssue = {
      issueID: `${Date.now()}`,
      issueLink: 'www.kaka9tolinka.re',
      issueName: `issue ${Math.floor(Math.random() * 1000)}`,
      issuePriority: 'high',
      issueStatus: 'opened',
    };

    setIssue((prev) => [...prev, newIssue]);
  };

  return (
    <Container className={classes.root}>
      <Grid container spacing={1}>
        <IssueList issues={issues} />
        <Grid item sm={6}>
          <div onClick={addIssue}>
            <IssueCard mode="create" />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

/*
  ISSUE LIST
  
  <Grid item sm={6}>
    {issues.map((issue) => (
      <IssueCard key={issue.issueID} mode="show" issue={issue} />
    ))}
  </Grid>

*/

export default IssueCreation;
