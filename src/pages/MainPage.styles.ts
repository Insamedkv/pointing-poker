import { makeStyles } from '@material-ui/core/styles';
import { SiteColors } from '../utils/styleConstants';

export const useStyles = makeStyles(({ palette }) => ({
  mainContainer: {
    height: 'calc(100vh - 50px)',
    maxWidth: 'none',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  image: {
    width: '555px',
    height: '150px',
    borderRadius: '0px',
    margin: '80px auto 10px',
  },
  title: {
    cursor: 'default',
    fontSize: '50px',
    color: `${SiteColors.THIRD_COLOR}`,
    fontWeight: 'bold',
  },
  startNewGame: {
    width: '70%',
    height: '22%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  wrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '50%',
  },
  label: {
    fontSize: '30px',
    alignSelf: 'flex-start',
  },
  btn: {
    width: '220px',
  },
  connectGame: {
    width: '70%',
    height: '30%',
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
    boxShadow: '0px 5px 18px 1px grey',
    padding: '5px 30px',
  },
}));
