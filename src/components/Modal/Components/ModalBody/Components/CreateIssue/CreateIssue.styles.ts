import { createStyles, makeStyles } from '@material-ui/core';

const useIssueStyles = makeStyles(({ shadows, typography }) =>
  createStyles({
    issueParametersBlock: {
      display: 'flex',
    },
    inputLabel: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
    },
    input: {
      boxShadow: `inner ${shadows[4]}`,
    },
    labelText: {
      width: '30%',
      fontSize: '24px',
      fontWeight: typography.fontWeightBold,
    },
  })
);

export { useIssueStyles };
