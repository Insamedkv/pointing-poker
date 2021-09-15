import React from 'react';
import { Grid } from '@material-ui/core';
import IssueCard from 'components/IssueCard';
import { IIssue } from 'defaultTypes';

interface IIssueListProps {
  issues: Array<IIssue>;
}

const IssueList: React.FC<IIssueListProps> = ({ issues }) => {
  return (
    <Grid item sm={6}>
      {issues.map((issue) => (
        <IssueCard key={issue.issueID} mode="show" issue={issue} />
      ))}
    </Grid>
  );
};

export default IssueList;
