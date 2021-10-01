import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    gamePageContainer: {
      minHeight: 'calc(100vh - 120px)',
      padding: '40px 20px',
    },
    setupGrid: {
      padding: '35px 0',
    },
    setubGridButtons: {
      padding: '45px 0',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      width: '65%',
    },
    btnMargin: {
      margin: '20px 0',
    },
  })
);

export { useStyles };
