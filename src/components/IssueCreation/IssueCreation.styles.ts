import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      minWidth: '452px',
      // width: '550px',
      width: 'auto',
    },
  })
);

export { useStyles };
