import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ palette }) =>
  createStyles({
    gamePageContainer: {
      minHeight: 'calc(100vh - 120px)',
      padding: '40px 20px',
    },
    setupGrid: {
      padding: '106px 20px 0 20px !important',
      minWidth: '240px',
    },
    setubGridButtons: {
      width: '100%',
      display: 'flex',
      padding: '0px',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    btnMargin: {
      margin: '20px 0',
    },
    setupWidth: {
      padding: '0 22px',
    },
    cardStyles: {
      width: 'auto',
      margin: '10px 5px 0 0',
      minWidth: '100px',
      height: '40%',
      minHeight: '200px',
      boxShadow: `2px 2px 5px 2px ${palette.divider}`,
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
    cardContainer: {
      maxWidth: '740px',
      padding: '0 22px',
      margin: 'auto',
      minWidth: '468px',
    },
  })
);

export { useStyles };
