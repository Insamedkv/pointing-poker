import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ typography }) =>
  createStyles({
    root: {
      position: 'relative',
      fontFamily: ['Ruda', 'serif'].join(','),
      fontSize: '24px',
      fontWeight: typography.fontWeightBold,
      lineHeight: '30px',
      textAlign: 'center',
    },
    lobbyLabel: {
      fontStyle: 'italic',
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    editButton: {
      opacity: '.6',
      fontSize: '24px',
      transition: 'opacity .2s ease-in-out',
      '&:hover': {
        opacity: 1,
      },
    },
    btnPadding: {
      paddingLeft: '30px',
      paddingRight: '30px',
    },
  })
);

export { useStyles };
