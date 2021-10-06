import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      minWidth: '500px',
      width: '550px',
    },
  })
);

export { useStyles };
