import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IIssue } from 'defaultTypes';
import { IssueResp } from 'services/serviceTypes';

const initialState: Array<IssueResp> = [];

const issueSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    // addIssue: (state, action: PayloadAction<IIssue>) => {
    //   const id = action.payload.issueID || crypto.randomBytes(16).toString('hex'); // for first time
    //   const issue: IIssue = { ...action.payload, issueID: id };
    //   return [...state, issue];
    // },
    dropIssue: (state, action: PayloadAction<string>) => {
      const filteredIssues = state.filter((issue: IssueResp) => issue._id !== action.payload);
      return filteredIssues;
    },
    // editIssue: (state, action: PayloadAction<IIssue>) => {
    //   const editableIssueIndex = state.findIndex((issue) => issue.issueID === action.payload.issueID);
    //   const issuesList = [
    //     ...state.slice(0, editableIssueIndex),
    //     action.payload,
    //     ...state.slice(editableIssueIndex + 1),
    //   ];
    //   return issuesList;
    // },
    setIssues: (state, action: PayloadAction<Array<IssueResp>>) => [...action.payload],
  },
});

export default issueSlice;
export const { setIssues, dropIssue } = issueSlice.actions;
