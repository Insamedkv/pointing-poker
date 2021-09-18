import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export const useStyles = makeStyles({
  cardStyles: {
    margin: '10px',
    width: '12%',
    minWidth: '125px',
    height: '40%',
    minHeight: '200px',
    boxShadow: `2px 2px 5px 2px ${grey.A200}`,
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    fontSize: '25px',
    borderRadius: '20px',
    fontWeight: 900,
    position: 'relative',
  },
  btn: {
    width: '100%',
    height: '100%',
  },
  cardIcon: {
    width: '90%',
    height: '90%',
    color: 'rgba(50%, 50%, 50%, 0.6);',
    transition: 'all 0.25s ease-out;',
    '&:hover': {
      color: 'rgba(38%, 85%, 75%, 0.5)',
      width: '100%',
      height: '100%',
    },
  },
});
