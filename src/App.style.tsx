import { makeStyles } from '@material-ui/core'

const styles = makeStyles((theme) => ({
  splash: {
    margin: 0,
    width: '100vw',
    height: '100svh',
    background: 'url(/img/scene2tile.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: '69% center',
    backgroundColor: 'rgb(66, 66, 66)',
    // backgroundPosition: 'calc(50% + -168px) center',
    overflow: 'hidden',
    borderRadius: 0,
    [theme.breakpoints.down('md')]: {
      // backgroundPosition: '64% center',
      // backgroundPosition: 'calc(50% + -152px) center',
      backgroundPosition: 'calc( 50% + 100svh / 1632 * -290 ) center',
    },
  },
  app: {
    margin: 0,
    // backgroundColor: '#fafafa',
    width: '100vw',
    backgroundColor: 'rgb(66, 66, 66)',
    overflowY: 'auto',
    height: 'calc(100svh - 60px)',
    borderRadius: 0,
    [theme.breakpoints.down('md')]: {
      height: 'calc(100svh - 48px)',
      overflowX: 'hidden',
    },

  },
}))

export default styles
