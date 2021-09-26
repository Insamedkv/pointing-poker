import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, CardContent, Container, Typography } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { editIssueModal } from 'reduxstore/modalSlice/modalSlice';
import classNames from 'classnames';
import { dropIssue } from 'reduxstore/issuesSlice';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { IssueResp } from 'services/serviceTypes';
import { deleteRoomIssue } from 'services/httpRoom';
import { useStyles } from './IssueCard.styles';

interface IPropsForCreate {
  mode: 'create';
  issue?: undefined;
}

interface IPropsForShow {
  mode: 'show';
  issue: IssueResp;
}

type IIssueProps = IPropsForShow | IPropsForCreate;

const IssueCard: React.FC<IIssueProps> = ({ mode, issue }) => {
  const { room, isDealer } = useTypedSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  const classes = useStyles();
  const isCreateMode = mode === 'create';

  const isGameStarted = false;

  const deleteIssue = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (issue?._id) dispatch(dropIssue(issue._id));
  };

  const editIssue = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (issue?._id) dispatch(editIssueModal(issue._id));
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
            onClick={async (event: React.MouseEvent) => {
              await deleteRoomIssue(room!._id, issue!._id);
              deleteIssue(event);
            }}
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
        // isInProgress && classes.currentIssue,
        isCreateMode && classes.issueCreator,
        isDealer && classes.issueCreator
      )}
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
            <Typography variant="h5">{issue?.issueTitle}</Typography>
            <Typography variant="subtitle2">Priority: {issue?.priority}</Typography>
          </CardContent>

          {isDealer && <Container classes={{ root: classes.actionContainer }}>{setControls()}</Container>}
        </>
      )}
    </Card>
  );
};

export default IssueCard;
