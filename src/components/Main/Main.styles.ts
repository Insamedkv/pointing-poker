import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  mainContainer: {
    minHeight: '500px',
    height: `calc(100vh - 120px)`,
    maxWidth: 'none',
    width: '100%',
  },
  image: { width: '555px', height: '150px', borderRadius: '0px', margin: '120px auto 20px' },
});
