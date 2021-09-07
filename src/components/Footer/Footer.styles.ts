import { makeStyles } from '@material-ui/core/styles';
import { constants } from '../constants';

export const useStyles = makeStyles({
  footerContainer: {
    height: '50px',
    margin: '0px',
    maxWidth: 'none',
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
    color: `${constants.whiteColor}`,
  },
  author: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: `${constants.whiteColor}`,
    fontSize: '18px',
  },
});
