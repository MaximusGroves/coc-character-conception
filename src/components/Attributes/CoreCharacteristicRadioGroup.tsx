import React, { FC } from 'react';
import {
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@material-ui/core';
import styles from './Attribute.style';

import {
  CharacteristicKey,
  CharacteristicName,
  charKeys,
} from '../../data/types';

import { difference, remove } from 'lodash';

type Props = {
  selection?: string;
  onSelection: (event: React.ChangeEvent<HTMLInputElement>) => void;
  priority?: CharacteristicKey[];
};

const CharacteristicRadioGroup: FC<Props> = (props: Props) => {
  const { selection, onSelection } = props;

  const charKeyKeys = Object.keys(charKeys);
  let remaining = difference(charKeyKeys, props.priority || []);
  remaining = remove(remaining, (val) => val !== 'list');
  const classes = styles();

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">
        Suggested Attributes from Archetype listed first
      </FormLabel>
      <RadioGroup
        aria-label="CharacteristicName"
        name="CharacteristicName"
        value={selection}
        onChange={(e) => onSelection(e)}
      >
        <Grid container direction="row">
          {props.priority?.map((key) => (
            <Grid item key={key}>
              <FormControlLabel
                value={key}
                control={<Radio />}
                label={CharacteristicName[key]}
                classes={{ root: classes.priority }}
              />
            </Grid>
          ))}
          {remaining.map((key) => (
            <Grid item key={key}>
              <FormControlLabel
                value={key}
                control={<Radio />}
                label={CharacteristicName[key as CharacteristicKey]}
              />
            </Grid>
          ))}
        </Grid>
      </RadioGroup>
    </FormControl>
  );
};

export default CharacteristicRadioGroup;
