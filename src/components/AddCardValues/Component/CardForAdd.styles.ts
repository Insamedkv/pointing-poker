import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export const useStyles = makeStyles({
  cardStyles: {
    margin: '80px',
    width: '250px',
    height: '350px',
    boxShadow: `2px 2px 5px 2px ${grey.A200}`,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
    fontSize: '25px',
    borderRadius: '20px',
    fontWeight: 900,
    position: 'relative',
  },
  cardIcon: {
    width: '70%',
    height: '70%',
    color: 'grey',
  },
});
