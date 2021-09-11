import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export const useStyles = makeStyles(() => ({
  timerWrap: {
    margin: '100px auto',
    width: '250px',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    boxShadow: `2px 2px 5px 2px ${grey.A200}`,
  },
  timer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '80%',
  },
  minutes: {
    fontSize: '55px',
    margin: '0px',
  },
  seconds: {
    fontSize: '55px',
    margin: '0px',
  },
  BTNBlock: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
