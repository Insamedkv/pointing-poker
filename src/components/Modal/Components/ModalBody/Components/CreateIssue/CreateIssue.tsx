import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import { useStyles } from 'components/Modal/ModalWindow.styles';
import { buttonTextConstants } from 'utils/buttonTextConstants';
import CustomButton from 'components/CustomButton';
import { addIssue, editIssue } from 'reduxstore/issuesSlice';
import { IIssue } from 'defaultTypes';
import { closeModal } from 'reduxstore/modalSlice/modalSlice';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useIssueStyles } from './CreateIssue.styles';

const CreateIssue: React.FC = () => {
  const classes = useStyles();
  const editableIssueID = useTypedSelector((state) => state.modal.editableIssueID);
  const issuesList = useTypedSelector((state) => state.issues);
  const issueClasses = useIssueStyles();
  const dispatch = useDispatch();

  const currentIssue = issuesList.find((issue) => issue.issueID === editableIssueID);

  const [issueState, setIssueState] = useState<IIssue>({
    issueID: currentIssue?.issueID || '',
    issueName: currentIssue?.issueName || '',
    issueLink: currentIssue?.issueLink || '',
    issuePriority: currentIssue?.issuePriority || 'medium',
    issueStatus: currentIssue?.issueStatus || 'opened',
  });

  interface IMaterialsSelectChangeEvent {
    name?: string | undefined;
    value: unknown;
  }

  const generateIssue = (event: React.ChangeEvent<IMaterialsSelectChangeEvent>) => {
    const { name, value } = event.target as HTMLInputElement;
    const issue = {
      ...issueState,
      [name]: value,
    };
    setIssueState(issue);
  };

  const SelectPriority = () => {
    return (
      <Select
        name="issuePriority"
        variant="outlined"
        value={issueState.issuePriority}
        defaultValue="medium"
        fullWidth
        onChange={generateIssue}
      >
        <MenuItem value={'low'}>Low</MenuItem>
        <MenuItem value={'medium'}>Medium</MenuItem>
        <MenuItem value={'high'}>High</MenuItem>
      </Select>
    );
  };

  return (
    <>
      <Container>
        <Typography className={classes.modalHeader} variant="h2">
          {currentIssue ? 'Edit Issue' : 'Create Issue'}
        </Typography>
      </Container>

      <Container>
        <InputLabel className={issueClasses.inputLabel}>
          <Typography className={issueClasses.labelText}>Title:</Typography>
          <TextField
            name="issueName"
            className={issueClasses.input}
            variant="outlined"
            fullWidth
            onChange={generateIssue}
            value={issueState.issueName}
          />
        </InputLabel>

        <InputLabel className={issueClasses.inputLabel}>
          <Typography className={issueClasses.labelText}>Link:</Typography>
          <TextField
            name="issueLink"
            className={issueClasses.input}
            variant="outlined"
            fullWidth
            onChange={generateIssue}
            value={issueState.issueLink}
          />
        </InputLabel>

        <InputLabel className={issueClasses.inputLabel}>
          <Typography className={issueClasses.labelText}>Priority:</Typography>
          <SelectPriority />
        </InputLabel>
      </Container>

      <Container className={classes.buttonsBlock}>
        <CustomButton
          className={classes.btn}
          buttonCaption={buttonTextConstants.YES}
          onClick={() => {
            if (!currentIssue) {
              dispatch(addIssue(issueState));
            } else {
              dispatch(editIssue(issueState));
            }
            dispatch(closeModal());
          }}
        />
        <CustomButton
          className={classes.btn}
          buttonCaption={buttonTextConstants.NO}
          variant="outlined"
          onClick={() => dispatch(closeModal())}
        />
      </Container>
    </>
  );
};

export default CreateIssue;
