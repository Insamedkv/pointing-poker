import { makeStyles } from '@material-ui/core';
import { SiteColors } from '../../utils/styleConstants';

const useStyles = makeStyles({
  modal: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    maxWidth: '876px',
    height: '500px',
    background: '#fff',
    margin: 'auto',
    marginTop: 'calc(50vh - 250px)',
    border: '2px solid #000',
  },
  close: {
    fontFamily: '',
    position: 'absolute',
    right: 0,
    top: '10px',
    '&:hover': {
      color: 'red',
    },
  },
  buttonsBlock: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  btn: {
    textTransform: 'capitalize',
    padding: '0 50px',
  },
  modalHeader: {
    textTransform: 'capitalize',
    fontSize: '64px',
    fontWeight: 700,
  },
});

export { useStyles };
