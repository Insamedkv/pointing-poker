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
    messagesArea: {
      height: '85vh',
      padding: '0px',
      overflowX: 'hidden',
      overflowY: 'scroll',
    },
    enterTextArea: {
      height: '12vh',
      padding: '0px',
      marginTop: '10px',
      position: 'sticky',
      display: 'flex',
      justifyContent: 'space-between',
    },
    chatContainer: {
      padding: '10px 0',
      position: 'relative',
    },
    messageField: {
      display: 'flex',
      height: '100%',
      width: '99%',
      flexDirection: 'column',
      justifyContent: 'space-between',
      background: 'aliceblue',
      borderRadius: '4px',
      padding: '7px 10px',
      fontSize: '18px',
    },
    inputMessageField: {
      background: 'azure',
      borderRadius: '4px',
    },
    textSection: {
      overflowWrap: 'anywhere',
      height: '100%',
      background: palette.common.white,
      borderRadius: '4px',
      padding: '5px',
      fontSize: 'inherit',
      boxShadow: shadows[4],
      textAlign: 'center',
    },
    usernameContainer: {
      display: 'flex',
      padding: '5px 0',
      alignItems: 'center',
    },
    dateSection: {
      fontWeight: typography.fontWeightBold,
      fontSize: '11px',
      fontStyle: 'italic',
      padding: '5px 10px',
      textAlign: 'right',
    },
    nameSection: {
      fontWeight: typography.fontWeightBold,
      fontStyle: 'italic',
      padding: '5px 10px',
      textAlign: 'right',
      fontSize: '16px',
    },
    kickPlayer: {
      position: 'absolute',
      right: 0,
      top: 0,
    },
  })
);

export { useStyles };
