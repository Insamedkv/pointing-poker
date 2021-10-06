import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ typography }) =>
  createStyles({
    bodyMessage: {
      fontFamily: ['Ruda', 'serif'].join(','),
      fontSize: '32px',
      fontWeight: typography.fontWeightBold,
      lineHeight: '30px',
      textAlign: 'center',
    },
    modalContainer: {
      display: 'flex',
      justifyContent: 'center',
      height: '450px',
      alignItems: 'center',
    },
  })
);

export { useStyles };
