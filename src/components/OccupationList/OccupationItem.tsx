import React, { FC } from 'react'
import {
  Grid,
  Paper,
  Typography,
  Divider,
  Button,
  Fade,
} from '@material-ui/core'
import styles from './OccupationList.style'
import { Archetype } from '../../data/archetypes'
import { useAppContext } from '../../providers/AppContextProvider'
import { ReactComponent as Sigil } from '../../assets/Sigil_of_the_Gateway.svg'
import clsx from 'clsx'
import { Occupation } from '../../data/occupations'

type Props = {
  occupation: Occupation
}

const OccupationItem: FC<Props> = (props) => {
  const classes = styles()
  const { occupation } = props
  const { state, api } = useAppContext()
  const { selectOccupation } = api
  const { selectedOccupation } = state
  const selected = selectedOccupation === occupation

  return (
    <Grid item sm={12} md={6} lg={4}>
      <Paper
        className={clsx(
          classes.occupationItem,
          selected && classes.occupationSelected
        )}
      >
        <Button
          className={classes.button}
          onClick={() => {
            selectOccupation(occupation)
          }}
          TouchRippleProps={{
            classes: {
              child: selected ? classes.rippleDeselect : classes.ripple,
            },
          }}
        >
          <div className={classes.itemContainer}>
            <Fade in={selected}>
              <Sigil className={classes.sigil} />
            </Fade>

            <Typography variant="h2" className={classes.title}>
              {occupation.name}
            </Typography>
            <Divider className={classes.divider} />

            <Typography variant="body2" className={classes.flavorText}>
              {occupation.name}
            </Typography>
          </div>
        </Button>
      </Paper>
    </Grid>
  )
}

export default OccupationItem
