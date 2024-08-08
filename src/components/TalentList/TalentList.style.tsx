import { makeStyles } from '@material-ui/core';
import { green, purple, darkPurple } from '../../providers/AppThemeProvider';

const styles = makeStyles((theme) => ({
  itemContainer: {
    paddingBottom: 80,
  },

  title: {
    backgroundColor: '#fde300',
    margin: -20,
    padding: 20,
    paddingBottom: 0,
    marginBottom: 0,
    [theme.breakpoints.down('xs')]: {
      padding: '20px 0 0',
    }
  },


  fontScalar: {
    fontFamily: 'Playbill',
    fontSize: 30,
    lineHeight: '44px',
    color: 'black',
    textTransform: 'uppercase',
    textAlign: 'center',
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
  },
  divider: {
    marginLeft: -20,
    marginRight: -20,

    color: 'black',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },

  listContainer: {
    [theme.breakpoints.down('xs')]: {
      marginLeft: -28,
      width: 'calc( 100% + 56px )',
    }
  },

  titleTop: {
    fontFamily: 'Cthulhumbus',
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
    textShadow: `1px 2px 4px ${purple}, 0px 3px 6px ${darkPurple}, 0px 0px 5px ${green}, 3px 3px 20px ${green}, -2px 1px 30px ${green}`,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },

  talentItem: {},

  talentCard: {

    '&:hover': {
      boxShadow:
        '0px 7px 8px -4px rgba(22, 155, 30,0.4),0px 12px 17px 2px rgba(22, 155, 30,0.28),0px 5px 22px 4px rgba(22, 155, 30 ,0.24)',
      cursor: 'pointer',
      border: `3px solid ${green} !important`
    },
    userSelect: 'none',
    border: `3px solid #00000000`,
    transition: 'transform 0.3s, box-shadow 0.3s, border 0.3s',
  },

  talentSection: {
    marginTop: '20px',
    marginBottom: '50px',

    transition: 'transform 0.3s, box-shadow 0.3s',
  },

  talentSelected: {
    boxShadow:
      '0px 8px 9px -5px rgba(122, 40, 203,0.6),0px 15px 22px 2px rgba(122, 40, 203,0.42),0px 6px 28px 5px rgba(122, 40, 203,0.36)!important',
    transform: 'scale(102%)',
    border: `3px solid ${purple}`,
    '&:hover': {
      border: `3px solid ${purple} !important`
    },
  },

  button: {
    padding: 20,
    overflow: 'hidden',
    width: '100%',
    minHeight: 250,
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
    width: 120,
    height: 120,
    position: 'absolute',
    right: 5,
    bottom: -20,
    stroke: 'white!important',

  },
}));

export default styles;
