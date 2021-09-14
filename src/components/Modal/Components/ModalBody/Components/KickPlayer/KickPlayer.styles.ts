import { createStyles, makeStyles } from '@material-ui/core';

const useKickPlayerStyles = makeStyles(({ typography }) =>
  createStyles({
    modalHeader: {
      fontSize: '64px',
      fontWeight: typography.fontWeightBold,
      textAlign: 'center',
    },
  })
);

export { useKickPlayerStyles };
