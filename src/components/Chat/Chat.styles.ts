import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ palette, typography, shadows }) =>
  createStyles({
    chatMainContainer: {
      position: 'absolute',
      top: '70px',
      right: 0,
      height: 'calc(100% - 120px)',
      width: '40vw',
      padding: '0px 4px',
      border: `1px bold ${palette.divider}`,
      background: palette.grey.A100,
      transition: `all .3s ease-in-out`,
      zIndex: 10,
    },
    chatWorkflow: {
      position: 'sticky',
      padding: '5px',
      top: '0px',
      height: '100vh',
      border: `1px dotted ${palette.divider}`,
      overflow: 'auto',
    },
    chatContainer: {
      padding: '10px 0',
    },
    messageField: {
      display: 'flex',
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'space-between',
      background: 'aliceblue',
      borderRadius: '4px',
      padding: '7px 10px',
      fontSize: '18px',
    },
    textSection: {
      overflowWrap: 'anywhere',
      height: '100%',
      background: palette.common.white,
      borderRadius: '4px',
      padding: '5px',
      fontSize: 'inherit',
      boxShadow: shadows[4],
    },
    dateSection: {
      fontWeight: typography.fontWeightBold,
      fontStyle: 'italic',
      padding: '5px 10px',
      textAlign: 'right',
    },
  })
);

export { useStyles };
