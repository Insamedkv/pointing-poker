import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Container, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import { useStyles } from 'components/Modal/ModalWindow.styles';
import { buttonTextConstants } from 'utils/buttonTextConstants';
import CustomButton from 'components/CustomButton';
import { Issue } from 'services/serviceTypes';
import { IIssue } from 'defaultTypes';
import { createRoomIssue, updateRoomIssue } from 'services/httpRoom';
import { closeModal } from 'reduxstore/modalSlice/modalSlice';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useIssueStyles } from './CreateIssue.styles';

const CreateIssue: React.FC = () => {
  const classes = useStyles();
  const issueClasses = useIssueStyles();
  const issuesList = useTypedSelector((state) => state.issues); // return from redux
  const { room } = useTypedSelector((state) => state.currentUser);
  const editableIssueID = useTypedSelector((state) => state.modal.editableIssueID);
  const dispatch = useDispatch();

  const currentIssue = issuesList.find((issue) => issue._id === editableIssueID);
  console.log(editableIssueID, issuesList);

  const [issueState, setIssueState] = useState<IIssue>({
    issueID: currentIssue?._id || '',
    issueName: currentIssue?.issueTitle || '',
    issueLink: currentIssue?.link || '',
    issuePriority: currentIssue?.priority || 'medium',
    isCurrent: false,
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

  const fn = async () => {
    const issue: Issue = {
      issueTitle: issueState.issueName,
      priority: issueState.issuePriority,
      link: issueState.issueLink,
    };

    if (editableIssueID) {
      await updateRoomIssue(room!._id, editableIssueID, issue);
      return;
    }
    await createRoomIssue(room!._id, issue);
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
        <Button
          variant="contained"
          color="primary"
          className={classes.btn}
          disabled={issueState.issueName === ''}
          onClick={() => {
            // if (!currentIssue) {
            //   dispatch(addIssue(issueState));
            // } else {
            //   dispatch(editIssue(issueState));
            // }
            fn();
            dispatch(closeModal());
          }}
        >
          {buttonTextConstants.YES}
        </Button>
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
