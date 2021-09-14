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
  },
  btn: {
    background: `${SiteColors.MAIN_COLOR}`,
    color: palette.common.white,
  },
  btnHover: {
    // background: `${SiteColors.MAIN_COLOR}`,
    color: 'red',
  },
  connectGame: {
    width: '70%',
    height: '30%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
  },
  wrapSecondBlock: {
    alignSelf: 'start',
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'flex-start',
    // width: '50%',
  },
}));
