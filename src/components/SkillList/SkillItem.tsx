import React, { FC } from 'react';
import {
  Typography,
  Divider,
  Paper,
  Grid,
  IconButton,
  Button,
} from '@material-ui/core';
import styles from './SkillList.style';
// import { useAppContext } from '../../providers/AppContextProvider';
import { Skill, skills } from '../../data/skills';
import { Remove, Add } from '@material-ui/icons';
import clsx from 'clsx';
import useLongPress from '../../providers/useLongPress';
import { useWidth } from '../../providers/AppThemeProvider';

type Props = {
  skill: Skill;
  pointsRemaining: number;
  setPointsRemaining: Function;
  points: number;
  minPoints: number;
};

const SkillItem: FC<Props> = (props: Props) => {
  const classes = styles();
  const { points, skill, pointsRemaining, setPointsRemaining, minPoints } = props;

  const matchingKey = Object.keys(skills).find(key => skills[key] === skill);

  const [selected, setSelected] = React.useState(false);

  const useAddPoint = () => {
    if (points + minPoints < 95) {
      if (pointsRemaining >= 5) {
        setPointsRemaining(matchingKey, points + 5, pointsRemaining - 5);

      } else if (pointsRemaining > 0) {
        setPointsRemaining(matchingKey, points + pointsRemaining, 0);
      }
    } else {
      const remainingSpace = 99 - points - minPoints;
      if (pointsRemaining >= remainingSpace) {
        setPointsRemaining(matchingKey, 99 - minPoints, pointsRemaining - remainingSpace);
      } else {
        setPointsRemaining(matchingKey, points + pointsRemaining, 0);
      }


    }

  }

  const useSubPoint = () => {
    if (points > 0) {
      if (points < 5) {
        setPointsRemaining(matchingKey, 0, pointsRemaining + points);
      } else {
        setPointsRemaining(matchingKey, points - 5, pointsRemaining + 5);
      }
    }
  }

  const addOne = () => {
    if (pointsRemaining > 0 && points + minPoints < 99) {
      setPointsRemaining(matchingKey, points + 1, pointsRemaining - 1)
    }

  }

  const subOne = () => {
    if (points > 0) {
      setPointsRemaining(matchingKey, points - 1, pointsRemaining + 1)
    }
  }

  const [pointIncrementer, setIncrementer] = React.useState<NodeJS.Timeout | undefined>(undefined);

  const onLongPressAdd = () => {
    const newPoints = setTimeout(useAddPoint, 50);
    setIncrementer(newPoints);
  };

  const onLongPressUpAdd = () => {
    if (pointIncrementer) {
      clearTimeout(pointIncrementer);
    }
  };

  const onLongPressSub = () => {
    const newPoints = setTimeout(useSubPoint, 10);
    setIncrementer(newPoints);
  };

  const onLongPressUpSub = () => {
    if (pointIncrementer) {
      clearTimeout(pointIncrementer);
    }
  };


  const holdDur = 300;

  const longPressAddEvent = useLongPress(onLongPressAdd, onLongPressUpAdd, holdDur, addOne);
  const longPressSubEvent = useLongPress(onLongPressSub, onLongPressUpSub, holdDur, subOne);


  const currentWidth = useWidth();

  return (
    <Grid item container xs={6} sm={6} md={3} lg={3} xl={2} style={{ display: 'flex', marginBottom: currentWidth === 'xs' ? 4 : 'unset' }}>
      <Paper
        className={clsx(classes.root,
          selected && classes.talentSelected
        )}
      >

        <Button

          className={classes.button}
          onClick={() => {
            setSelected(!selected);
          }}
          TouchRippleProps={{
            classes: {
              child: selected ? classes.rippleDeselect : classes.ripple,
            },
          }}

        >
          <Typography style={{ position: 'absolute', left: 3, bottom: 5, fontSize: 22, color: '#111' }}>{skill.startingValue}</Typography>
          <Typography style={{ position: 'absolute', right: 3, bottom: 5, fontSize: 22, color: '#111' }}>{points}</Typography>
          <Grid item container direction="column" style={{}}>
            <Grid item className={classes.title}>
              <Typography
                className={classes.fontScalar}
                color="textSecondary"
                gutterBottom
                style={{ color: points === 0 && !selected ? '#777' : 'inherit', transition: 'color 0.3s' }}
              >
                {skill.name}
              </Typography>

              <Divider className={classes.divider} />
            </Grid>


          </Grid>

          <div style={{ position: 'absolute', bottom: 0 }}>
            <Grid
              item
              container
              direction="row"
              alignItems="center"
              justify="center"
              style={{ marginTop: 5, display: 'flex' }}
            >
              <Grid item>
                <IconButton
                  disabled={!selected}
                  color={points > 0 ? "secondary" : 'default'}
                  style={{ opacity: points > 0 ? 1 : 0.3 }}
                  {...longPressSubEvent}
                  onClick={e => e.stopPropagation()}
                >
                  <Remove />
                </IconButton>
              </Grid>
              <Grid item>
                <Typography
                  variant="h4"
                  style={{ color: points === 0 ? '#777' : 'inherit', transition: 'color 0.3s' }}
                >
                  {points + minPoints}
                </Typography>
              </Grid>
              <Grid item>
                <IconButton
                  disabled={!selected}
                  color={pointsRemaining > 0 && points + minPoints < 99 ? "primary" : 'default'}
                  style={{ opacity: pointsRemaining > 0 && points + minPoints < 99 ? 1 : 0.3 }}
                  {...longPressAddEvent}
                  onClick={e => e.stopPropagation()}

                >

                  <Add />
                </IconButton>
              </Grid>
            </Grid>

          </div>


        </Button>
        {/* <Fade in={selected}>
            <Sigil className={classes.sigil} />
          </Fade> */}
      </Paper>
    </Grid >
  );
};

export default SkillItem;
