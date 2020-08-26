import React, { FC } from 'react'
import {
  Grid,
  Paper,
  Typography,
  Divider,
  Button,
  Fade,
} from '@material-ui/core'
import styles from './ArchetypeList.style'
import { Archetype } from '../../data/archetypes'
import { useAppContext } from '../../providers/AppContextProvider'
import { ReactComponent as Sigil } from '../../assets/Sigil_of_the_Gateway.svg'
import clsx from 'clsx'
import { red } from '../../providers/AppThemeProvider'

type Props = {
  archetype: Archetype
  keyName: string
}

const ArchetypeItem: FC<Props> = (props) => {
  const classes = styles()
  const { archetype } = props
  const { state, api } = useAppContext()
  const { selectArchetype } = api
  const { selectedArchetype } = state
  const selected = selectedArchetype === archetype

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
          <div className={classes.itemContainer}>
            <Fade in={selected}>
              <Sigil className={classes.sigil} fill={red} />
            </Fade>

            <Typography variant="h2" className={classes.title}>
              {archetype.name}
            </Typography>
            <Divider className={classes.divider} />
            <div className={classes.characteristic}>
              <Typography variant="h5">
                {archetype.core.map((characteristic, charIndex) => (
                  <span key={archetype.name + '-' + characteristic}>
                    <b>{characteristic}</b>
                    {charIndex + 1 < archetype.core.length && ' or '}
                  </span>
                ))}
              </Typography>
            </div>
            <Typography variant="body2" className={classes.flavorText}>
              {archetype.description}
            </Typography>
          </div>
        </Button>
      </Paper>
    </Grid>
  )
}

export default ArchetypeItem
