import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import crypto from 'crypto';
import { IIssue } from 'defaultTypes';

const initialState: Array<IIssue> = [];

const issueSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    addIssue: (state, action: PayloadAction<IIssue>) => {
      const id = action.payload.issueID || crypto.randomBytes(16).toString('hex'); // for first time
      const issue: IIssue = { ...action.payload, issueID: id };
      return [...state, issue];
    },
    dropIssue: (state, action: PayloadAction<string>) => {
      const filteredIssues = state.filter((issue: IIssue) => issue.issueID !== action.payload);
      return filteredIssues;
    },
    editIssue: (state, action: PayloadAction<IIssue>) => {
      const editableIssueIndex = state.findIndex((issue) => issue.issueID === action.payload.issueID);
      const issuesList = [
        ...state.slice(0, editableIssueIndex),
        action.payload,
        ...state.slice(editableIssueIndex + 1),
      ];
      return issuesList;
    },
  },
});

export default issueSlice;
export const { addIssue, dropIssue, editIssue } = issueSlice.actions;
