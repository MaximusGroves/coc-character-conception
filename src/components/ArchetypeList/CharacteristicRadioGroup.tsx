import React, { FC } from 'react';
import {
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@material-ui/core';
// import styles from './ArchetypeList.style'

import { CharacteristicName, charKeys } from '../../data/types';

type Props = {
  selection: string;
  onSelection: Function;
};

const CharacteristicRadioGroup: FC<Props> = (props: Props) => {
  const { selection, onSelection } = props;

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Filter by Core Characteristic</FormLabel>
      <RadioGroup
        aria-label="CharacteristicName"
        name="CharacteristicName"
        value={selection}
        onChange={(e) => onSelection(e)}
      >
        <Grid container direction="row">
          <Grid item>
            <FormControlLabel value="All" control={<Radio />} label="All" />
          </Grid>

          {charKeys.list.map((key) => (
            <Grid item key={key}>
              <FormControlLabel
                value={key}
                control={<Radio />}
                label={CharacteristicName[key]}
              />
            </Grid>
          ))}
        </Grid>
      </RadioGroup>
    </FormControl>
  );
};

export default CharacteristicRadioGroup;
