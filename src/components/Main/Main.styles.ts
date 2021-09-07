import { makeStyles } from '@material-ui/core/styles';
import { constants } from '../constants';

export const useStyles = makeStyles({
  mainContainer: {
    minHeight: '500px',
    height: `calc(100vh - ${constants.heigthFooter} - ${constants.marginMain})`,
    maxWidth: 'none',
    width: '100%',
  },
  image: { width: '555px', height: '150px', borderRadius: '0px', margin: '120px auto 20px' },
});
