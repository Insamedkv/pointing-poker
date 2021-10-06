import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IssueResp } from 'services/serviceTypes';

const initialState: Array<IssueResp> = [];

const issueSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    dropIssue: (state, action: PayloadAction<string>) => {
      const filteredIssues = state.filter((issue: IssueResp) => issue._id !== action.payload);
      return filteredIssues;
    },
    setIssues: (state, action: PayloadAction<Array<IssueResp>>) => [...action.payload],
  },
});

export default issueSlice;
export const { setIssues, dropIssue } = issueSlice.actions;
