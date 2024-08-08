import { makeStyles } from '@material-ui/core';
import { darkPurple, purple, green } from '../../providers/AppThemeProvider';

const styles = makeStyles((theme) => ({
  root: {
    background: 'url(/img/banner1.png)',
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    [theme.breakpoints.down('sm')]: {
      height: 170,
      backgroundSize: '66% 66%',
    },
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

  headerTitleNudge: {
    marginRight: 'auto',
    paddingTop: 24,
    [theme.breakpoints.down('sm')]: {
      marginTop: -8,
      paddingTop: 0,
    }
  },

  charName: {
    fontFamily: 'CthulhusCalling',
    fontSize: 40,
    color: 'white',
    position: 'absolute',
    top: 60,
    left: 'calc( 75% + 12px )',
    transform: 'translate(-50%, -50%)',
    textShadow: `1px 2px 4px ${purple}, 0px 3px 6px ${darkPurple}, 0px 0px 5px ${green}, 3px 3px 20px ${green}, -2px 1px 30px ${green}`,
    [theme.breakpoints.down('sm')]: {
      top: 100,
      left: '50%',
      position: 'absolute',
      transform: 'translateX(-50%)',
    },



  }
}));

export default styles;
