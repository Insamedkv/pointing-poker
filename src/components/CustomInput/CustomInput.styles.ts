import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ palette, typography }) => ({
  root: {
    fontSize: '24px',
    border: `1px solid #EEE`,
    borderBottomLeftRadius: '10px',
    padding: '2px 10px',
    height: '47px',
    boxShadow: 'inset 0px 2px 4px rgba(0, 0, 0, 0.25), 1px 1px 4px rgba(0, 0, 0, 0.25)',
    transition: 'all .2s ease-in-out',
  },
  focused: {
    border: `1px solid ${palette.primary.main}`,
  },
  inputButton: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    height: '47px',
    padding: '2px 50px',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, .6)',
    textTransform: 'capitalize',
  },
  container: {
    display: 'flex',
    width: '465px',
  },
  inputLabel: {
    color: palette.common.black,
    fontWeight: typography.fontWeightBold,
    fontSize: '24px',
    lineHeight: '28px',
    padding: '4px 20px',
  },
  inputError: {
    border: `1px solid red`,
  },
}));

export { useStyles };
