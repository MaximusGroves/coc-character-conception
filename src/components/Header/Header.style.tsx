import { makeStyles } from '@material-ui/core';
import { darkPurple, purple, green } from '../../providers/AppThemeProvider';

const styles = makeStyles((theme) => ({
  root: {
    background: 'url(/img/banner1.png)',
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
  },
  title: {
    fontFamily: 'SFComicScript',
    fontSize: 50,
    [theme.breakpoints.down('sm')]: {
      fontSize: 30,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 22,
    },
  },
  charName: {
    fontFamily: 'CthulhusCalling',
    fontSize: 40,
    color: 'white',
    position: 'absolute',
    top: 60,
    left: 'calc( 75% + 12px )',
    transform: 'translate(-50%, -50%)',
    textShadow: `1px 2px 4px ${purple}, 0px 3px 6px ${darkPurple}, 0px 0px 5px ${green}, 3px 3px 20px ${green}, -2px 1px 30px ${green}`

  }
}));

export default styles;
