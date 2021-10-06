import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    statisticcontainer: {
      padding: '0 22px',
      margin: 'auto',
      maxWidth: '740px',
      minWidth: '468px',
    },
  })
);

export { useStyles };
