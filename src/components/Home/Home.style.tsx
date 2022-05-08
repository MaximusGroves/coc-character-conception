import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
  root: {
    display: 'flex',
    padding: 24,
    flexDirection: 'column',
    maxWidth: 2000,
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
  },

  drawerPaper: { overflow: 'hidden' },

  buttons: {
    position: 'absolute',
    bottom: 100,
  },
});

export default styles;
