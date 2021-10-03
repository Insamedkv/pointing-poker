import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export const useStyles = makeStyles(() => ({
  timerWrap: {
    height: '64px',
    display: 'flex',
    borderRadius: '2px',
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
}));
