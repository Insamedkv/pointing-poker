import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      minWidth: '500px',
      width: '550px',
      padding: 0,
      margin: 0,
    },
  })
);

export { useStyles };
