import { makeStyles } from '@material-ui/core'

const styles = makeStyles((theme) => ({
  stepperRoot: {
    maxWidth: 2000,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  stepperParent: {
    width: 'calc(100% - 96px)',
  },

  stepper: {
    padding: '9px 24px 10px',

    minHeight: 42,
    [theme.breakpoints.down('sm')]: {
      minHeight: 84,
    },
  },

  selectionStyle: {
    textAlign: 'left',
    lineHeight: '22px',
    fontSize: 25,
    marginLeft: -4,
    marginRight: 2,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },

  selectionStyleArchetype: {
    fontFamily: 'SFComicScript',
  },

  selectionStyleOccupation: {
    fontFamily: 'Diploma',
  },

  selectionStyleTalent: {
    fontFamily: 'Lobster',
  },

  btnLeft: {
    // marginLeft: 24,
  },

  btnRight: {
    // marginRight: 24,
  },
}))

export default styles
