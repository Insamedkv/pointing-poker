import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ palette, typography, shadows }) =>
  createStyles({
    timerContainer: {
      display: 'flex',
      margin: 0,
      padding: '10px',
      alignItems: 'center',
      width: '200px',
      boxShadow: shadows[4],
      borderRadius: '4px',
    },
    inputTime: {
      fontSize: '32px',
      textAlign: 'center',
      fontWeight: typography.fontWeightBold,
      border: `1px solid ${palette.divider}`,
      borderRadius: '4px',
      boxShadow: shadows[1],
      padding: '2px',
      '&::-webkit-inner-spin-button': { opacity: '.6' },
      '&::-webkit-outer-spin-button': { opacity: '.6' },
    },
    timeDivider: {
      padding: '0 10px',
    },
  })
);

export { useStyles };
