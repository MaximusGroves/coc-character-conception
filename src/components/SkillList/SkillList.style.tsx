import { makeStyles } from '@material-ui/core';
import { green, purple, darkPurple } from '../../providers/AppThemeProvider';


const styles = makeStyles((theme) => ({
  itemContainer: {
    paddingBottom: 80,
  },

  unselectable: {
    userSelect: 'none',
    '-webkit-user-select': 'none', /* disable selection/Copy of UIWebView */
    '-webkit-touch-callout': 'none', /* disable the IOS popup when long-press on a link */
  },

  title: {
    backgroundColor: '#000',
    margin: -20,
    padding: 20,
    paddingBottom: 5,
    marginBottom: 0,
    // marginBottom: ,
  },

  msgText: {
    fontStyle: 'italic',
    textShadow: '1px 1px 1px #000',
    paddingBottom: 26,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    }
  },

  pointsLeft: {
    fontWeight: 'bold',
    fontSize: '60px!important',
    marginBottom: '-10px!important',

  },

  minorText: {
    textShadow: '1px 1px 1px #000',
    paddingBottom: 16,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },

  recommitBtn: {
    marginTop: 20,
    backgroundColor: `${green}`,
    color: 'white',
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'block'
    }
  },

  fontScalar: {
    fontFamily: 'Pervitina',
    fontSize: 20,
    lineHeight: '24px',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 0,
  },
  characteristic: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  charText: {
    fontWeight: 600,
  },
  flavorText: {
    fontFamily: 'Arial',
    paddingTop: 20,
    textAlign: 'center',
  },
  divider: {
    marginLeft: -20,
    marginRight: -20,

    color: 'black',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },

  pointHelpers: {
    position: 'absolute',
    bottom: 18,
    fontSize: 20,
    color: '#111'
  },

  selectableGroup: {
    [theme.breakpoints.down('xs')]: {
      marginLeft: -28,
      width: 'calc( 100% + 56px )',
    }
  },

  talentItem: {},

  //  backgroundPosition: 'center top',
  talentCard: {
    //    backgroundImage: 'url(/img/bizcard.png)',
    //    backgroundSize: "120% 120%",

    '&:hover': {
      boxShadow:
        '0px 7px 8px -4px rgba(22, 155, 30,0.4),0px 12px 17px 2px rgba(22, 155, 30,0.28),0px 5px 22px 4px rgba(22, 155, 30 ,0.24)',
      cursor: 'pointer',
    },
    userSelect: 'none',
    transition: 'transform 0.3s, box-shadow 0.3s, border 0.3s'
  },

  talentSection: {
    //    backgroundImage: 'url(/img/talentpaper.jpg)',
    //    backgroundPosition: 'center top',
    marginTop: '20px',
    marginBottom: '50px',


  },

  talentSelected: {
    boxShadow:
      '0px 8px 9px -5px rgba(122, 40, 203,0.6),0px 15px 22px 2px rgba(122, 40, 203,0.42),0px 6px 28px 5px rgba(122, 40, 203,0.36)!important',
    transform: 'scale(102%)',
    border: `${purple} solid 3px !important`,
    '&:hover': {
      border: `solid 3px ${purple}`,
    },
  },

  root: {// padding: 20,
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    textTransform: 'none',
    textAlign: 'left',
    alignItems: 'flex-start',
    border: `#00000000 solid 3px`,
    transition: 'transform 0.3s, box-shadow 0.3s, border 0.3s',
    '&:hover': {
      boxShadow:
        '0px 7px 8px -4px rgba(22, 155, 30,0.4),0px 12px 17px 2px rgba(22, 155, 30,0.28),0px 5px 22px 4px rgba(22, 155, 30 ,0.24)',
      cursor: 'pointer',
      border: `solid 3px ${green}`,
    },
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

  button: {
    paddingBottom: 40,
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    textTransform: 'none',
    textAlign: 'left',
    alignItems: 'flex-start',
  },

  ripple: {
    color: theme.palette.secondary.main,
  },

  rippleDeselect: {
    color: theme.palette.primary.main,
  },

  sigil: {
    width: 70,
    height: 70,
    position: 'absolute',
    left: 5,
    top: 5,
  },
  selectionStyleArchetype: {
    fontFamily: 'SFComicScript',
  },

}));

export default styles;
