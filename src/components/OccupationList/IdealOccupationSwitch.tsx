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
      <FormLabel component="legend">
        {`Filter by Recommended Occupations for Archetype ${
          disabled ? '- must select Archetype first' : ''
        }`}
      </FormLabel>

      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>All</Grid>
          <Grid item>
            <Switch
              disabled={disabled}
              checked={checked && !disabled}
              onChange={(e) => onCheck(e)}
              name="idealChecked"
            />
          </Grid>
          <Grid item>Recommended</Grid>
        </Grid>
      </Typography>
    </FormControl>
  )
}

export default IdealOccupationSwitch
