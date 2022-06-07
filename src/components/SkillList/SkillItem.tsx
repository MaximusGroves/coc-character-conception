import React, { FC } from 'react';
import {
  Typography,
  Divider,
  Button,
  Fade,
  Paper,
  Grid,
  IconButton,
} from '@material-ui/core';
import styles from './SkillList.style';
import { Talent } from '../../data/talents';
import { useAppContext } from '../../providers/AppContextProvider';
import { ReactComponent as Sigil } from '../../assets/Sigil_of_the_Gateway.svg';
import clsx from 'clsx';
import { Skill } from '../../data/skills';
import { Remove, Add } from '@material-ui/icons';

type Props = {
  skill: Skill;
};

const SkillItem: FC<Props> = (props: Props) => {
  const classes = styles();
  const { skill } = props;
  const { state, api } = useAppContext();

  const [points, setPoints] = React.useState(0);

  // const { selectTalent } = api;
  // const { selectedTalent } = state;

  // const selected =
  //   selectedTalent?.filter((val) => val.key === talent.key).length !== 0;

  return (
    <Grid item container sm={4} md={3} lg={2} style={{ display: 'flex' }}>
      <Paper
        className={classes.button}
        // className={clsx(classes.talentCard, selected && classes.talentSelected)}
      >
        <Grid item container direction="column" style={{ height: '100%' }}>
          <Grid item className={classes.title}>
            <Typography
              className={classes.fontScalar}
              color="textSecondary"
              gutterBottom
            >
              {skill.name}
            </Typography>

            <Divider className={classes.divider} />
          </Grid>
          <Grid item>
            <Typography variant="h5" className={classes.flavorText}>
              Starting Value: {skill.startingValue}
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="row"
            alignItems="center"
            justify="center"
            style={{ marginTop: 'auto', display: 'flex' }}
          >
            <Grid item>
              <IconButton
                color="secondary"
                onClick={() => {
                  if (points > 0) {
                    setPoints(points - 1);
                  }
                }}
              >
                <Remove />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography
                variant="h4"
                style={{ color: points === 0 ? '#ccc' : 'inherit' }}
              >
                {points + skill.startingValue}
              </Typography>
            </Grid>
            <Grid item>
              <IconButton color="primary" onClick={() => setPoints(points + 1)}>
                <Add />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        {/* <Fade in={selected}>
            <Sigil className={classes.sigil} />
          </Fade> */}
      </Paper>
    </Grid>
  );
};

export default SkillItem;
