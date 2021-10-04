import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ palette }) =>
  createStyles({
    statisticcontainer: {
      padding: '0 22px',
      margin: 'auto',
      maxWidth: '740px',
      minWidth: '468px',
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
  })
);

export { useStyles };
