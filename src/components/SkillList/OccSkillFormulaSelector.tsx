import React, { FC } from 'react';
import {
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@material-ui/core';
import styles from '../Attributes/Attribute.style';

import {
  CharacteristicKey,
  CharacteristicName,
  charKeys,
} from '../../data/types';

import { difference, remove } from 'lodash';
import { OccupationSkillFormula } from '../../data/occupations';

type Props = {
  selection?: string;
  onSelection: (val: OccupationSkillFormula) => void;
  options: OccupationSkillFormula[];
};

const OccSkillFormulaSelector: FC<Props> = (props: Props) => {
  const { selection, onSelection } = props;

  const classes = styles();

  const getLabel = (val: OccupationSkillFormula): string => {
    switch (val) {
      case OccupationSkillFormula.edu:
        return 'EDU * 4';
      case OccupationSkillFormula.eduApp:
        return 'EDU * 2 + APP * 2';
      case OccupationSkillFormula.eduCon:
        return 'EDU * 2 + CON * 2';
      case OccupationSkillFormula.eduDex:
        return 'EDU * 2 + DEX * 2';
      case OccupationSkillFormula.eduInt:
        return 'EDU * 2 + INT * 2';
      case OccupationSkillFormula.eduPow:
        return 'EDU * 2 + POW * 2';
      case OccupationSkillFormula.eduSiz:
        return 'EDU * 2 + SIZ * 2';
      case OccupationSkillFormula.eduStr:
        return 'EDU * 2 + STR * 2';
    }
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">
        Select the formula to use for calculating occupational skill points,
        distinct per occupation
      </FormLabel>
      <RadioGroup
        aria-label="CharacteristicName"
        name="CharacteristicName"
        value={selection}
        onChange={(e) =>
          onSelection(e.currentTarget.value as OccupationSkillFormula)
        }
      >
        <Grid container direction="row">
          {props.options?.map((key) => (
            <Grid item key={key}>
              <FormControlLabel
                value={key}
                control={<Radio />}
                label={getLabel(key)}
              />
            </Grid>
          ))}
        </Grid>
      </RadioGroup>
    </FormControl>
  );
};

export default OccSkillFormulaSelector;
