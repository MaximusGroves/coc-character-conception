import React, { FC } from 'react'
import {
  Grid,
  FormControl,
  FormLabel,
  Typography,
  Switch,
} from '@material-ui/core'

type Props = {
  checked: boolean
  onCheck: Function
  disabled: boolean
}

const IdealOccupationSwitch: FC<Props> = (props) => {
  const { checked, onCheck, disabled } = props

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend" style={{ textShadow: '1px 1px 1px #000' }}>
        {`Filter by Recommended Occupations for Archetype ${disabled ? '- must select Archetype first' : ''
          }`}
      </FormLabel>

      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item style={{ textShadow: '1px 1px 1px #000' }}>All</Grid>
          <Grid item>
            <Switch
              disabled={disabled}
              checked={checked && !disabled}
              onChange={(e) => onCheck(e)}
              style={{ textShadow: '1px 1px 1px #000' }}
              name="idealChecked"
            />
          </Grid>
          <Grid item style={{ textShadow: '1px 1px 1px #000' }}>Recommended</Grid>
        </Grid>
      </Typography>
    </FormControl>
  )
}

export default IdealOccupationSwitch
