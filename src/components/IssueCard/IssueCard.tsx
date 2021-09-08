import React from 'react';
import { Card, CardContent, Container, Typography } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
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
  const classes = useStyles();

  const issueObj: IIssue = {
    issueID: 'dafasdf-asdfas-asdf2334f34f-23fsfs',
    issueName: 'ISSUE 554',
    issueLink: 'http://jira.../',
    issuePriority: 'low',
  };

  const isGameStarted = false;
  const isDiller = true;

  const deleteFunction = () => {};
  const editFunction = () => {};
  const createFunction = () => {};

  const setControls = (): JSX.Element => {
    if (!isGameStarted) {
      return (
        <>
          <EditOutlinedIcon
            onClick={() => console.log('Edit!')}
            fontSize="large"
            classes={{ root: classes.controlElement }}
          />
          <DeleteOutlineIcon
            onClick={() => console.log('Delete!')}
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
    <Card className={classNames(classes.root, issue?.inProgress && classes.currentIssue)}>
      {mode === 'create' ? (
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

          {isDiller && <Container classes={{ root: classes.actionContainer }}>{setControls()}</Container>}
        </>
      )}
    </Card>
  );
};

export default IssueCard;
