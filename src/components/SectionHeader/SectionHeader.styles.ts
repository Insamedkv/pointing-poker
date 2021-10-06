import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ typography }) =>
  createStyles({
    root: {
      fontFamily: 'Ruda, serif',
      fontWeight: typography.fontWeightBold,
      fontSize: '24px',
      textAlign: 'center',
      lineHeight: '30px',
      padding: '30px 0',
    },
  })
);

export { useStyles };
