import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(({ typography, palette, shadows }) =>
  createStyles({
    root: {
      position: 'relative',
      fontSize: '24px',
      border: `1px solid ${palette.divider}`,
      borderBottomLeftRadius: '10px',
      padding: '2px 10px',
      height: '47px',
      boxShadow: `inset ${shadows[4]}, ${shadows[4]}`,
      transition: 'all .2s ease-in-out',
    },
    focused: {
      border: `1px solid ${palette.primary.main}`,
    },
    textCentration: {
      textAlign: 'center',
    },
    inputButton: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      height: '47px',
      padding: '2px 50px',
      boxShadow: shadows[4],
      textTransform: 'capitalize',
    },
    container: {
      display: 'flex',
      width: '465px',
      margin: 0,
    },
    inputLabel: {
      color: palette.common.black,
      fontWeight: typography.fontWeightBold,
      fontSize: '24px',
      lineHeight: '28px',
      padding: '4px 20px',
    },
    inputError: {
      border: `1px solid ${palette.error.main}`,
    },
  })
);

export { useStyles };
