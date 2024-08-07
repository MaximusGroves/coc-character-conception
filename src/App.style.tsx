import { makeStyles } from '@material-ui/core'

const styles = makeStyles((theme) => ({
  splash: {
    margin: 0,
    backgroundColor: '#fafafa',
    width: '100vw',
    height: '100dvh',
    background: 'url(/img/scene2tile.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    // '-webkit-transform': 'scaleX(-1)',
    // transform: 'scaleX(-1)',
  },
  app: {
    margin: 0,
    // backgroundColor: '#fafafa',
    width: '100vw',
    overflowY: 'auto',
    height: 'calc(100dvh - 62px)',
    [theme.breakpoints.down('md')]: {
      height: 'calc(100dvh - 50px)',
    },

  },
}))

export default styles
