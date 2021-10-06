import { makeStyles } from '@material-ui/core/styles';
import { AdditionalColors } from '../../../../utils/styleConstants';

export const useStyles = makeStyles(() => ({
  input: {
    width: 'auto',
    height: '40px',
  },
  centerateText: {
    textAlign: 'center',
  },
  wrapForBtn: {
    width: '100%',
    paddingTop: '15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexGrow: 2,
  },
  cancelChages: {
    color: `${AdditionalColors.AV40}`,
    '&:hover': {
      transform: 'scale(1.4)',
    },
  },
  btnStyle: {
    width: '100%',
    minWidth: '55px',
    fontSize: 'Medium',
    padding: '4px 6px',
    height: 'auto',
  },
  invisibleBTN: {
    display: 'none',
  },
}));
