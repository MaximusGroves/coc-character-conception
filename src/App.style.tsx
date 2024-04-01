import { makeStyles } from '@material-ui/core'

const styles = makeStyles((theme) => ({
  splash: {
    margin: 0,
    backgroundColor: '#fafafa',
    width: '100vw',
    height: '100vh',
    background: 'url(/img/scene2.png)',
    // '-webkit-transform': 'scaleX(-1)',
    // transform: 'scaleX(-1)',
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
  },
  app: {
    margin: 0,
    backgroundColor: '#fafafa',
    width: '100vw',
    overflowY: 'auto',
    height: 'calc(100vh - 62px)',
    [theme.breakpoints.down('sm')]: {
      height: '100vh',
    },
  },
}))

export default styles
