import React, { FC } from 'react'
import { Grid, Paper, Typography, Divider } from '@material-ui/core'
import styles from './ArchetypeList.style'
import { Archetype } from '../../data/archetypes'

type Props = {
  archetype: Archetype
}

const ArchetypeItem: FC<Props> = (props) => {
  const classes = styles()
  const { archetype } = props

  return (
    <Grid item sm={12} md={6} lg={4}>
      <Paper className={classes.item2}>
        <Typography variant="h2" className={classes.title}>
          {archetype.name}
        </Typography>
        <Divider className={classes.divider} />
        <div className={classes.characteristic}>
          <Typography variant="h5">
            {archetype.core.map((characteristic, charIndex) => (
              <span>
                <b>{characteristic}</b>
                {charIndex + 1 < archetype.core.length && ' or '}
              </span>
            ))}
          </Typography>
        </div>
        <Typography variant="body2" className={classes.flavorText}>
          {archetype.description}
        </Typography>
      </Paper>
    </Grid>
  )
}

export default ArchetypeItem
