import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ typography, palette }) => ({
  modal: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    maxWidth: '876px',
    minHeight: '500px',
    background: '#fff',
    margin: 'auto',
    marginTop: 'calc(50vh - 250px)',
    border: `2px solid ${palette.common.black}`,
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
    fontWeight: typography.fontWeightBold,
    textTransform: 'capitalize',
    fontSize: '64px',
  },
}));

export { useStyles };
