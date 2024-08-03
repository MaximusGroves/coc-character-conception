import { makeStyles } from '@material-ui/core'
import { darkPurple, green, purple } from '../../providers/AppThemeProvider'

const styles = makeStyles((theme) => ({
  archetypeItem: {
    backgroundImage: 'url(/img/parchment1.png)',
    backgroundPosition: 'center top',
    '&:hover': {
      boxShadow:
        '0px 7px 8px -4px rgba(22, 155, 30,0.4),0px 12px 17px 2px rgba(22, 155, 30,0.28),0px 5px 22px 4px rgba(22, 155, 30 ,0.24)',
      cursor: 'pointer',
      border: `3px solid ${green}`,
    },
    userSelect: 'none',
    transition: 'transform 0.3s, box-shadow 0.3s, border 0.3s',
    border: `3px solid #00000000`,


  },

  archetypeSelected: {
    boxShadow:
      '0px 8px 9px -5px rgba(122, 40, 203,0.6),0px 15px 22px 2px rgba(122, 40, 203,0.42),0px 6px 28px 5px rgba(122, 40, 203,0.36)!important',
    transform: 'scale(102%)',
    transition: 'transform 0.3s, box-shadow 0.3s, border 0.3s',
    border: `3px solid ${purple}`,
    '&:hover': {
      border: `3px solid ${purple}`,
    },

  },

  button: {
    padding: '20px !important',
    textTransform: 'none',
    textAlign: 'left',
    flexDirection: 'column',
    color: 'black',
  },

  ripple: {
    color: theme.palette.secondary.main,
  },

  rippleDeselect: {
    color: theme.palette.primary.main,
  },

  sigil: {
    width: 80,
    height: 80,
    position: 'absolute',
    right: -8,
    bottom: -8,
  },

  itemContainer: {
    position: 'relative',
    minHeight: 320,
  },

  title: {
    fontFamily: 'SFComicScript',
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
  traitText: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    paddingTop: 55,
    paddingRight: 77,
  },
  toBottom: {
    marginTop: 'auto',
  },
  divider: {
    marginLeft: -20,
    marginRight: -20,
    marginTop: 10,
    color: 'black',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },

  talentText: {
    marginTop: -5,
    paddingBottom: 5,
  },

  talentName: {
    textDecoration: 'underline',
  },

  titleTop: {
    fontFamily: 'Cthulhumbus',
    color: 'white',
    fontSize: 20,
    marginBottom: 20,

    textShadow: `1px 2px 4px ${purple}, 0px 3px 6px ${darkPurple}, 0px 0px 5px ${green}, 3px 3px 20px ${green}, -2px 1px 30px ${green}`

  },

  priority: {
    fontWeight: 'bold'
  },

  normal: {

  },

}))

export default styles
