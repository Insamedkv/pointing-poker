import { createStyles, makeStyles } from '@material-ui/core';

const useKickPlayerStyles = makeStyles(({ typography, palette }) =>
  createStyles({
    modalHeader: {
      fontSize: '64px',
      fontWeight: typography.fontWeightBold,
      textAlign: 'center',
      marginTop: '15px',
    },
    bodyMessage: {
      fontFamily: ['Ruda', 'serif'].join(','),
      fontSize: '24px',
      fontWeight: typography.fontWeightBold,
      lineHeight: '30px',
      textAlign: 'center',
    },
    playerName: {
      fontSize: '28px',
      fontWeight: 'inherit',
      color: palette.secondary.main,
      textDecoration: 'underline',
    },
  })
);

export { useKickPlayerStyles };
