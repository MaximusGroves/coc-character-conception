import { makeStyles } from '@material-ui/core'

const styles = makeStyles((theme) => ({
  splash: {
    margin: 0,
    backgroundColor: '#fafafa',
    width: '100vw',
    height: '100vh',
    background: 'url(/img/scene2tile.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: '66% center',
    overflowY: 'hidden',
    borderRadius: 0,
  },
  app: {
    margin: 0,
    // backgroundColor: '#fafafa',
    width: '100vw',
    overflowY: 'auto',
    height: 'calc(100dvh - 60px)',
    [theme.breakpoints.down('md')]: {
      height: 'calc(100dvh - 48px)',
      overflowX: 'hidden',
    },

  },
}))

export default styles
