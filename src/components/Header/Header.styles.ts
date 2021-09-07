import { makeStyles } from '@material-ui/core/styles';
import { baseTheme } from '../../utils/customTheme';

export const useStyles = makeStyles({
  container: {
    width: '100%',
    height: 'auto',
    position: 'relative',
    padding: '0px',
    margin: '0px',
    maxWidth: 'none',
  },
  containerHigh: {
    width: '100%',
    height: '50px',
  },
  containerLow: {
    width: '100%',
    height: '20px',
  },
  containerLogo: {
    top: '20px',
    left: '5%',
    width: '70px',
    height: '70px',
    position: 'absolute',
  },
  containerIcon: {
    top: '2px',
    right: '5%',
    position: 'absolute',
    color: baseTheme.palette.common.white,
  },
});
