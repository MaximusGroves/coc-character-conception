import React, { FC } from 'react';
import {
  Typography,
  Divider,
  Button,
  Fade,
  Paper,
  Grid,
} from '@material-ui/core';
import styles from './TalentList.style';
import { Talent } from '../../data/talents';
import { useAppContext } from '../../providers/AppContextProvider';
import { ReactComponent as Sigil } from '../../assets/sigwhite.svg';
import clsx from 'clsx';

type Props = {
  talent: Talent;
};

const TalentItem: FC<Props> = (props: Props) => {
  const classes = styles();
  const { talent } = props;
  const { state, api } = useAppContext();
  const { selectTalent } = api;
  const { selectedTalent } = state;

  const selected =
    selectedTalent?.filter((val) => val.key === talent.key).length !== 0;

  return (
    <Grid item sm={12} md={6} lg={4}>
      <Paper
        className={clsx(classes.talentCard, selected && classes.talentSelected)}
      >
        <Button
          className={classes.button}
          onClick={() => {
            selectTalent(talent);
          }}
          TouchRippleProps={{
            classes: {
              child: selected ? classes.rippleDeselect : classes.ripple,
            },
          }}
        >
          <Grid container direction="column">
            <Grid item className={classes.title}>
              <Typography
                className={classes.fontScalar}
                color="textSecondary"
                gutterBottom
              >
                {talent.name}
              </Typography>

              <Divider className={classes.divider} />
            </Grid>
            <Grid item>
              <Typography variant="h5" className={classes.flavorText}>
                {talent.description}
              </Typography>
            </Grid>
          </Grid>
          <Fade in={selected}>
            <Sigil className={classes.sigil} />
          </Fade>
        </Button>
      </Paper>
    </Grid>
  );
};

export default TalentItem;
