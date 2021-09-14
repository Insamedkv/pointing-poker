import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    btnPadding: {
      padding: '0 30px',
      margin: '10px 0',
    },
    btnContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    dealerPanel: {
      padding: '20px 0 40px 0',
    },
  })
);

export { useStyles };
