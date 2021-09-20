import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, CardContent, Container, Typography } from '@material-ui/core';
import { dropIssue } from 'reduxstore/issuesSlice';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { editIssueModal } from 'reduxstore/modalSlice/modalSlice';
import classNames from 'classnames';
import { useStyles } from './IssueCard.styles';
import { IIssue } from '../../defaultTypes';

interface IPropsForCreate {
  mode: 'create';
  issue?: undefined;
}

interface IPropsForShow {
  mode: 'show';
  issue: IIssue;
}

type IIssueProps = IPropsForShow | IPropsForCreate;

const IssueCard: React.FC<IIssueProps> = ({ mode, issue }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const isCreateMode = mode === 'create';
  const isInProgress = issue?.issueStatus === 'progress';

  const isGameStarted = false;
  const isDealer = true;

  const deleteIssue = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (issue?.issueID) dispatch(dropIssue(issue.issueID));
  };

  const editIssue = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (issue?.issueID) dispatch(editIssueModal(issue.issueID));
  };

  const setAsCurrent = () => {
    if (isDealer && !isCreateMode) console.log(`Current:`, issue?.issueID);
  };

  const setControls = (): JSX.Element => {
    if (!isGameStarted) {
      return (
        <>
          <EditOutlinedIcon
            onClick={(event: React.MouseEvent) => editIssue(event)}
            fontSize="large"
            classes={{ root: classes.controlElement }}
          />
          <DeleteOutlineIcon
            onClick={(event: React.MouseEvent) => deleteIssue(event)}
            fontSize="large"
            color="error"
            classes={{ root: classes.controlElement }}
          />
        </>
      );
    }
    return <CloseOutlinedIcon classes={{ root: classes.controlElement }} fontSize="large" />;
  };

  return (
    <Card
      className={classNames(
        classes.root,
        isInProgress && classes.currentIssue,
        isCreateMode && classes.issueCreator,
        isDealer && classes.issueCreator
      )}
      onClick={setAsCurrent}
    >
      {isCreateMode ? (
        <>
          <CardContent className={classes.cardBody}>
            <Typography variant="h5">Create new Issue</Typography>
          </CardContent>
          <AddOutlinedIcon classes={{ root: classes.controlElement }} fontSize="large" />
        </>
      ) : (
        <>
          <CardContent className={classes.cardBody}>
            <Typography variant="h5">{issue?.issueName}</Typography>
            <Typography variant="subtitle2">Priority: {issue?.issuePriority}</Typography>
          </CardContent>

          {isDealer && <Container classes={{ root: classes.actionContainer }}>{setControls()}</Container>}
        </>
      )}
    </Card>
  );
};

export default IssueCard;
