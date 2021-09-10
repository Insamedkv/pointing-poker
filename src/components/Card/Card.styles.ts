import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  cardStyles: {
    margin: '80px',
    width: '250px',
    height: '350px',
    boxShadow: '2px 2px 5px 2px grey',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
    fontSize: '25px',
    borderRadius: '20px',
    fontWeight: 'bold',
    position: 'relative',
  },
  cardItem: {
    alignSelf: 'flex-start',
    cursor: 'default',
  },
  cardImage: {
    width: '130px',
    height: 'auto',
    borderRadius: '0',
  },
  cardImageReverse: {
    transform: 'rotate(180deg)',
    alignSelf: 'flex-end',
    cursor: 'default',
  },
  cardStylesActive: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'rgba(38%, 85%, 75%, 0.5)',
    top: 0,
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardStylesNotActive: {
    display: 'none',
  },
  backgrIcon: {
    background: 'rgba(38%, 85%, 75%, 1)',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  approveImage: {
    width: '100%',
    height: '100%',
    padding: '15px',
    boxSizing: 'border-box',
  },
});
