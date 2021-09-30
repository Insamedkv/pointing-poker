import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export const useStyles = makeStyles({
  cards: {
    marginLeft: '10px',
  },
  cardStylesBack: {
    display: 'none',
  },
  cardStyles: {
    width: 'auto',
    margin: '10px 5px 0 0',
    minWidth: '100px',
    height: '40%',
    minHeight: '200px',
    boxShadow: `2px 2px 5px 2px ${grey.A200}`,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    fontSize: '25px',
    borderRadius: '20px',
    fontWeight: 900,
    position: 'relative',
  },
});
