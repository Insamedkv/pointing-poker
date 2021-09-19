import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export const useStyles = makeStyles({
  cardsContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardStylesFront: {
    margin: '10px',
    width: '12%',
    minWidth: '125px',
    height: '40%',
    minHeight: '200px',
    boxShadow: `2px 2px 5px 2px ${grey.A200}`,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
    fontSize: '1.2rem',
    borderRadius: '20px',
    fontWeight: 900,
    position: 'relative',
  },
  cardStylesBack: {
    display: 'none',
  },
});
