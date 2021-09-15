import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(({ typography, palette, shadows }) =>
  createStyles({
    root: {
      position: 'relative',
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
    input: {
      textAlign: 'center',
      fontSize: '24px',
      fontWeight: typography.fontWeightLight,
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
      minWidth: '465px',
      margin: 0,
    },
    inputLabel: {
      color: palette.common.black,
      fontWeight: typography.fontWeightMedium,
      fontStyle: 'italic',
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
