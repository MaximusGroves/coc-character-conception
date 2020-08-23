import { makeStyles } from '@material-ui/core'

const styles = makeStyles((theme) => ({
  buttons: {
    paddingLeft: 24,
  },
  selectionStyle: {
    fontFamily: 'SFComicScript',
    textAlign: 'left',
    lineHeight: '22px',
    fontSize: 25,
    marginLeft: -4,
    marginRight: 2,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },

  selectionStyleOccupation: {
    fontFamily: 'Diploma',
    textAlign: 'left',
    lineHeight: '22px',
    fontSize: 25,
    marginLeft: -4,
    marginRight: 2,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },

  selectionStyleTalent: {
    fontFamily: 'Lobster',
    textAlign: 'left',
    lineHeight: '22px',
    fontSize: 25,
    marginLeft: -4,
    marginRight: 2,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },


  stepper: {
    minHeight: 42,
    paddingTop: 20,
    paddingBottom: 10,
    [theme.breakpoints.down('sm')]: {
      minHeight: 84,
    },
  },
}))

export default styles
