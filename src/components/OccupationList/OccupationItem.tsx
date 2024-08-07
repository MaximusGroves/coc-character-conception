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
// import { Archetype } from '../../data/archetypes'
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
  const { name, idealCharacteristics } = occupation
  const selected = selectedOccupation === occupation

  return (
    <Grid item xs={12} sm={12} md={6} lg={6} xl={4} className={classes.gridParent}>
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
              {name}
            </Typography>
            <Divider className={classes.divider} />

            <Typography variant="body2" className={classes.flavorText}>
              {name}
            </Typography>

            <div className={classes.characteristic}>
              <Typography variant="h5">
                {idealCharacteristics.map((characteristic, charIndex) => (
                  <span key={name + '-' + characteristic}>
                    <b>{characteristic}</b>
                    {charIndex + 1 < idealCharacteristics.length && ' or '}
                  </span>
                ))}
              </Typography>
            </div>
          </div>
        </Button>
      </Paper>
    </Grid>
  )
}

export default OccupationItem
