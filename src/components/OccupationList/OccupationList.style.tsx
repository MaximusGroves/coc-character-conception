import { makeStyles } from '@material-ui/core'
import { green, purple, darkPurple } from '../../providers/AppThemeProvider'

const styles = makeStyles((theme) => ({
  title: {
    fontFamily: 'Diploma',
    padding: '3px 20px 0',
    // wordBreak: 'break-word',

    // textAlign: 'left',
  },
  characteristic: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  charText: {
    fontWeight: 600,
  },
  flavorText: {
    fontStyle: 'italic',
  },
  divider: {
    marginTop: 4,
    color: 'black',
    backgroundColor: 'rgba(0,0,0,0.3)',
    maxWidth: 'calc( 100% - 80px )',

    marginLeft: 'auto',
    marginRight: 'auto',
  },

  occupationItem: {
    backgroundImage: 'url(/img/degree1.png)',
    backgroundPosition: 'center top',
    backgroundSize: '25%',

    textAlign: 'center',
    '&:hover': {
      boxShadow:
        '0px 7px 8px -4px rgba(22, 155, 30,0.4),0px 12px 17px 2px rgba(22, 155, 30,0.28),0px 5px 22px 4px rgba(22, 155, 30 ,0.24)',
      cursor: 'pointer',
      filter: `drop-shadow( 0px 0px 3px ${green})`
    },
    userSelect: 'none',
    transition: 'transform 0.3s, box-shadow 0.3s',

    border: '15px solid transparent',
    backgroundColor: '#FFFDEB',
    borderImage: 'url(/img/diplomaBorder600-2.png)',
    borderImageSlice: '110 fill',
    borderImageWidth: '29px'

  },

  titleTop: {
    fontFamily: 'Cthulhumbus',
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
    textShadow: `1px 2px 4px ${purple}, 0px 3px 6px ${darkPurple}, 0px 0px 5px ${green}, 3px 3px 20px ${green}, -2px 1px 30px ${green}`
  },

  occupationSelected: {
    boxShadow:
      '0px 4px 9px -5px rgba(122, 40, 203,0.4),0px 7px 22px 2px rgba(122, 40, 203,0.28),0px 3px 28px 5px rgba(122, 40, 203,0.24)!important',
    transform: 'scale(102%)',
    filter: `drop-shadow( 0px 0px 3px ${purple})`,
    '&:hover': {
      filter: `drop-shadow( 0px 0px 3px ${purple})`
    },
  },

  gridParent: {
    width: '100%',
  },

  button: {
    padding: 20,
    textTransform: 'none',
    textAlign: 'center',
    flexDirection: 'column',
    width: 'calc( 100% + 30px )',
    marginLeft: '-15px',
    marginRight: '-15px',
    marginTop: '-15px',
    marginBottom: '-15px',
    color: 'black'
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
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: 17,
    fill: `${'#FFD700'}`,
    filter: `drop-shadow(1px 1px 1px #ffffff50) drop-shadow(1px 1px 17px #D4AC10f0) drop-shadow(1px 1px 3px #00000090)`,
  },

  itemContainer: {
    position: 'relative',
    textAlign: 'center',
    paddingBottom: 80,
    // width: '100%',
  },

  // item0: {
  //   // minWidth: 300,
  //   padding: 20,
  //   backgroundImage: 'url(/img/pulp1.jpg)',
  //   backgroundPosition: 'center top',
  // },
  // item1: {
  //   // minWidth: 300,
  //   padding: 20,
  //   backgroundImage: 'url(/img/pulp2.jpg)',
  //   backgroundPosition: 'center top',
  // },
  // item2: {
  //   padding: 20,
  //   backgroundImage: 'url(/img/pulp3.jpg)',
  //   backgroundPosition: 'center top',
  // },
  // item3: {
  //   // minWidth: 300,
  //   padding: 20,
  //   backgroundImage: 'url(/img/pulp4.jpg)',
  //   backgroundPosition: 'center top',
  // },
}))

export default styles
