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

import {
  CharacteristicName,
  charKeys,
} from '../../data/types';
import { useAppContext } from '../../providers/AppContextProvider';
import styles from './ArchetypeList.style';

type Props = {
  selection: string;
  onSelection: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CharacteristicRadioGroup: FC<Props> = (props: Props) => {
  const { selection, onSelection } = props;

  const { state } = useAppContext();

  const classes = styles();

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend" style={{ textShadow: '1px 1px 1px #000' }}>Filter by Core Characteristic</FormLabel>
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
                style={{ textShadow: '1px 1px 1px #000' }}
                classes={{ label: state.coreAttribute === key ? classes.priority : classes.normal }}
              />
            </Grid>
          ))}
        </Grid>
      </RadioGroup>
    </FormControl>
  );
};

export default CharacteristicRadioGroup;
