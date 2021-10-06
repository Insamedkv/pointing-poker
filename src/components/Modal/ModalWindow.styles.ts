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
  modalBodyContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '500px',
    height: 'inherit',
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
    fontSize: '64px',
    fontWeight: typography.fontWeightBold,
    textAlign: 'center',
    marginTop: '15px',
  },
  modalHeaderAlternative: {
    fontWeight: typography.fontWeightBold,
  },
}));

export { useStyles };
