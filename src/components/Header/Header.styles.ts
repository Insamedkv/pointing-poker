import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  container: {
    width: '100%',
    height: 'auto',
    position: 'relative',
    padding: '0px',
    margin: '0px',
    maxWidth: 'none',
  },
  container__high: {
    background: '#2B3A67',
    width: '100%',
    height: '50px',
  },
  container__low: {
    background: '#66999B',
    width: '100%',
    height: '20px',
  },
  container__logo: {
    top: '20px',
    left: '5%',
  },
  container__icon: {
    top: '2px',
    right: '5%',
  },
});
