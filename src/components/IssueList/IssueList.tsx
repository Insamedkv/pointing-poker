import React from 'react';
import { Grid } from '@material-ui/core';
import IssueCard from 'components/IssueCard';
import { IIssue } from 'defaultTypes';
import { IssueResp } from 'services/serviceTypes';

interface IIssueListProps {
  issues: Array<IssueResp>;
}

const IssueList: React.FC<IIssueListProps> = ({ issues }) => {
  return (
    <Grid item sm={6}>
      {issues.map((issue: IssueResp) => (
        <IssueCard key={issue._id} mode="show" issue={issue} />
      ))}
    </Grid>
  );
};

export default IssueList;
