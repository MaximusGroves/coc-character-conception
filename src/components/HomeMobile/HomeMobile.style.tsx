import { makeStyles } from '@material-ui/core'

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: 0,
    flexDirection: 'column',
    maxWidth: 2000,
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    backgroundColor: 'transparent',
    height: 'calc(100vh - 200px)',
  },

  drawerPaper: { overflow: 'hidden' },

  mobileStepper: {
    backgroundColor: 'transparent',
    padding: 0,
  },

  buttons: {
    position: 'absolute',
    bottom: 100,
  },

  stepContent: {
    maxHeight: 'calc(100vh - 350px)',
    height: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
    [theme.breakpoints.down('xs')]: {
      maxHeight: 'calc(100vh - 342px)',
    },
  },

  summary: {
    borderBottom: '1px solid rgba(0,0,0,0.1)',
    // flexDirection: 'column',
  },

  selectionStyle: {
    textAlign: 'left',
    lineHeight: '22px',
    fontSize: 22,
    marginLeft: 2,
    // marginRight: 2,
    marginTop: -5,
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
}))

export default styles
