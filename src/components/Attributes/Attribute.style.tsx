import { makeStyles } from '@material-ui/core';
import { darkPurple, green, purple } from '../../providers/AppThemeProvider';

const styles = makeStyles((theme) => ({
  priority: {
    '& span': {
      fontWeight: 'bold',
    },
  },

  draglist: {
    position: 'relative',
  },

  titleTop: {
    fontFamily: 'Cthulhumbus',
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
    textShadow: `1px 2px 4px ${purple}, 0px 3px 6px ${darkPurple}, 0px 0px 5px ${green}, 3px 3px 20px ${green}, -2px 1px 30px ${green}`,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    }

  },

  bigText: {
    fontSize: 50,
    textAlign: 'center'
  },

  charName: {
    fontFamily: 'Cthulhumbus',
    color: 'white',
    textShadow: `1px 2px 4px ${purple}, 0px 3px 6px ${darkPurple}, 0px 0px 5px ${green}, 3px 3px 20px ${green}, -2px 1px 30px ${green}`,
    fontSize: 25,
    paddingRight: 10,
    paddingLeft: 20,
    textAlign: 'center'
  },

  listContent: {
    position: 'absolute',
    // width: 300,
    // height: 60,
    // transformOrigin: '50% 50 % 0px',
    borderRadius: 5,
    color: 'white',
    // lineHeight: '40px',
    fontSize: '20px',
    background: '#424242',
    backgroundSize: '200%',
    textTransform: 'uppercase',
    letterSpacing: 2,
    touchAction: 'none',
    userSelect: 'none',
    fontFamily: 'CthulhusCalling',
    textShadow: `1px 2px 4px ${purple}, 0px 3px 6px ${darkPurple}, 0px 0px 2px ${green}`,
    // textShadow: `1px 2px 4px ${purple}, 0px 3px 6px ${darkPurple}, 0px 0px 5px ${green}, 3px 3px 20px ${green}, -2px 1px 30px ${green}`,
    padding: 10,


    transition: 'box-shadow 0.3s, border 0.3s',
    border: `2px solid #424242`,
    '&:hover': {
      boxShadow: `0px 0px 10px 3px ${green}99`,
      border: `2px solid ${green}`,
      // transition: 'boxShadow 0.3s',
    },
    '&:active': {
      boxShadow: `0px 0px 10px 3px ${purple}`,
      border: `2px solid ${purple}`,
      // transition: 'box-shadow 0.3s',
    },
  },

  lockList: {
    position: 'absolute',
    touchAction: 'none',
    userSelect: 'none',
    '-webkit-tap-highlight-color': 'transparent',
    // padding: 10,



  },

}));

export default styles;
