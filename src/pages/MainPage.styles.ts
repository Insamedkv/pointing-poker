import { makeStyles } from '@material-ui/core/styles';
import { SiteColors } from '../utils/styleConstants';

export const useStyles = makeStyles(({ shadows }) => ({
  mainContainer: {
    height: 'calc(100vh - 120px)',
    maxWidth: '1120px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  image: {
    width: 'auto',
    height: 'auto',
    borderRadius: '0px',
  },
  title: {
    cursor: 'default',
    fontSize: '50px',
    color: `${SiteColors.THIRD_COLOR}`,
    fontWeight: 'bold',
  },
  startNewGame: {
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  wrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: '30px',
    alignSelf: 'flex-start',
  },
  btn: {
    width: 'auto',
  },
  connectGame: {
    alignSelf: 'flex-start',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  titleToConnect: {
    cursor: 'default',
    fontSize: '50px',
    color: `${SiteColors.THIRD_COLOR}`,
    fontWeight: 'bold',
    alignSelf: 'center',
    width: '50%',
  },
  wrapSecondBlock: {
    alignSelf: 'start',
    display: 'flex',
    alignItems: 'center',
  },
  inputURL: {
    marginRight: '10px',
    width: '300px',
    borderRadius: '20px 0 0 0',
    height: '55px',
    border: `1px solid ${SiteColors.SECONDARY_COLOR}`,
    boxShadow: shadows[7],
    padding: '5px 30px',
  },
}));
