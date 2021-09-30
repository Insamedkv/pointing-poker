import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  footerContainer: {
    height: '50px',
    margin: '0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0px',
    width: '100%',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: palette.common.white,
    cursor: 'default',
  },
  author: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: palette.common.white,
    fontSize: '18px',
  },
}));
