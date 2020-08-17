import React, { FC } from 'react'
import { Paper, Grid, Typography, Divider } from '@material-ui/core'
import styles from './ArchetypeList.style'
import { archetypes } from '../../data/archetypes'

const ArchetypeList: FC = () => {
  const classes = styles()

  const getClass = () => {
    const val = Math.floor(Math.random() * Math.floor(4))
    console.log(val)
    switch (val) {
      case 0:
        // return classes.item0
        return classes.item2
      case 1:
        // return classes.item1
        return classes.item2
      case 2:
        // return classes.item2
        return classes.item2
      case 3:
        return classes.item2
    }
  }

  return (
    <Grid container direction="row" className={classes.root} spacing={3}>
      {archetypes.map((archetype) => (
        <Grid item sm={12} md={6} lg={4}>
          <Paper className={getClass()}>
            <Typography variant="h2" className={classes.title}>
              {archetype.name}
            </Typography>
            <Divider className={classes.divider} />
            <div className={classes.characteristic}>
              {archetype.core.map((characteristic, charIndex) => (
                <div>
                  <Typography variant="h5" className={classes.charText}>
                    {characteristic}
                  </Typography>
                  {charIndex + 1 < archetype.core.length && (
                    <Typography>or</Typography>
                  )}
                </div>
              ))}
            </div>
            <Typography variant="body2" className={classes.flavorText}>
              {archetype.description}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}

export default ArchetypeList
