import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ palette }) =>
  createStyles({
    resultContainer: {
      minHeight: 'calc(100vh - 120px)',
      padding: '40px 0 40px 0',
    },
    issueContainer: {
      maxWidth: '740px',
      minWidth: '468px',
      paddingTop: '20px',
      paddingBottom: '5px',
      borderBottom: `thick double ${palette.divider}`,
      '&:last-child': {
        border: 'none',
      },
    },
    downloadButton: {
      width: '100%',
      marginBottom: '20px',
    },
  })
);

export { useStyles };
