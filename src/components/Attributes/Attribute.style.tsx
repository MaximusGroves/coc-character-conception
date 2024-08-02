import { makeStyles } from '@material-ui/core';
import { green, purple } from '@material-ui/core/colors';
import { darkPurple } from '../../providers/AppThemeProvider';

const styles = makeStyles(() => ({
  priority: {
    '& span': {
      fontWeight: 'bold',
    },
  },
  
}));

export default styles;
