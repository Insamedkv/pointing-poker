import { makeStyles } from '@material-ui/core';
import { grey, red } from '@material-ui/core/colors';

const useStyles = makeStyles(({ palette, typography, shadows }) => ({
  root: {
    position: 'relative',
    fontSize: '24px',
    border: `1px solid ${grey.A200}`,
    borderBottomLeftRadius: '10px',
    padding: '2px 10px',
    height: '47px',
    boxShadow: `inset ${shadows[4]}, ${shadows[4]}`,
    transition: 'all .2s ease-in-out',
  },
  focused: {
    border: `1px solid ${palette.primary.main}`,
  },
  requiredField: {
    '&::before': {
      content: '"*"',
      display: 'block',
      position: 'absolute',
      bottom: '35px',
      right: '0px',
      color: palette.error.main,
    },
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
    padding: '0 0 0 24px',
  },
  inputLabel: {
    color: palette.common.black,
    fontWeight: typography.fontWeightBold,
    fontSize: '24px',
    lineHeight: '28px',
    padding: '4px 20px',
  },
  inputError: {
    border: `1px solid ${red.A700}`,
  },
}));

export { useStyles };
