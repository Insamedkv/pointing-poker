import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';
import IssueCard from 'components/IssueCard';
import { IssueResp } from 'services/serviceTypes';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { getRoomIssues } from 'services/httpRoom';
import { setIssues } from 'reduxstore/issuesSlice';

const IssueList: React.FC = () => {
  const issues = useTypedSelector((state) => state.issues);
  const roomId = useTypedSelector((state) => state.currentUser.room?._id);
  const dispatch = useDispatch();

  useEffect(() => {
    if (roomId) getRoomIssues(roomId).then((data) => dispatch(setIssues(data)));
  }, [roomId]);

  return (
    <>
      {issues.map((issue: IssueResp) => (
        <Grid key={issue._id} item xs>
          <IssueCard key={issue._id} mode="show" issue={issue} />
        </Grid>
      ))}
    </>
  );
};

export default IssueList;
