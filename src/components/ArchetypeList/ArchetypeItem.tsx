import React, { FC } from 'react';
import {
  Grid,
  Paper,
  Typography,
  Divider,
  Button,
  Fade,
} from '@material-ui/core';
import styles from './ArchetypeList.style';
import { ArchetypeOption } from '../../data/archetypes';
import { useAppContext } from '../../providers/AppContextProvider';
import { ReactComponent as Sigil } from '../../assets/Sigil_of_the_Gateway.svg';
import clsx from 'clsx';
import { red } from '../../providers/AppThemeProvider';
import { TalentName, TalentKey } from '../../data/types';

type Props = {
  archetype: ArchetypeOption;
  keyName: string;
};

const ArchetypeItem: FC<Props> = (props: Props) => {
  const classes = styles();
  const { archetype } = props;
  const { state, api } = useAppContext();
  const { selectArchetype } = api;
  const { selectedArchetype } = state;
  const selected = selectedArchetype === archetype;

  const traitsText = archetype.traits.join(', ');
  const talentsText = archetype.talents
    .map((val) => TalentName[val as TalentKey])
    .join(', ');

  return (
    <Grid item sm={12} md={6} lg={4}>
      <Paper
        className={clsx(
          classes.archetypeItem,
          selected && classes.archetypeSelected
        )}
      >
        <Button
          className={classes.button}
          onClick={() => selectArchetype(archetype)}
          TouchRippleProps={{
            classes: {
              child: selected ? classes.rippleDeselect : classes.ripple,
            },
          }}
        >
          <Grid container direction="column" className={classes.itemContainer}>
            <Fade in={selected}>
              <Sigil className={classes.sigil} fill={red} />
            </Fade>
            <Grid item>
              <Typography variant="h2" className={classes.title}>
                {archetype.name}
              </Typography>
              <Divider className={classes.divider} />
            </Grid>
            <Grid item className={classes.characteristic}>
              <Typography variant="h5">
                {archetype.core.map((characteristic, charIndex) => (
                  <span key={archetype.name + '-' + characteristic}>
                    <b>{characteristic}</b>
                    {charIndex + 1 < archetype.core.length && ' or '}
                  </span>
                ))}
              </Typography>
            </Grid>
            {talentsText.length !== 0 && (
              <Grid item>
                <Typography variant="body1" className={classes.talentText}>
                  <span>Suggested Talent: </span>
                  <span className={classes.talentName}>{talentsText}</span>
                </Typography>
              </Grid>
            )}
            <Grid item>
              <Typography variant="body2" className={classes.flavorText}>
                {archetype.description}
              </Typography>
            </Grid>

            <Grid item className={classes.toBottom}>
              <Typography variant="body2" className={classes.traitText}>
                {traitsText}
              </Typography>
            </Grid>
          </Grid>

          <div></div>
        </Button>
      </Paper>
    </Grid>
  );
};

export default ArchetypeItem;
