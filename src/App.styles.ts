import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  wrapper: {
    position: 'relative',
    padding: '0px',
    margin: '0px',
    maxWidth: 'none',
  },
  blurWrapper: {
    position: 'relative',
    padding: '0px',
    margin: '0px',
    maxWidth: 'none',
    filter: 'blur(5px)',
  },
});
