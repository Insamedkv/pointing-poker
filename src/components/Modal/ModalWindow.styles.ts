import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ typography, palette }) => ({
  modal: {
    position: 'relative',
    maxWidth: '876px',
    minWidth: '500px',
    minHeight: '500px',
    maxHeight: '90vh',
    background: palette.common.white,
    padding: '10px 0',
    margin: 'auto',
    marginTop: '25px',
    border: `2px solid ${palette.grey[400]}`,
    overflow: 'auto',
  },
  buttonsBlock: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '50px',
    paddingBottom: '20px',
  },
  avatarBlock: {
    padding: '10px 20px',
  },
  btn: {
    padding: '0 50px',
  },
  modalHeaderContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '10px',
    paddingBottom: '20px',
  },
  modalHeader: {
    fontWeight: typography.fontWeightBold,
  },
}));

export { useStyles };
