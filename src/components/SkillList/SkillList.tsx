import React, { FC } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { skillList } from '../../data/skills';
import SkillItem from './SkillItem';
import { useAppContext } from '../../providers/AppContextProvider';
import OccSkillFormulaSelector from './OccSkillFormulaSelector';
import { OccupationSkillFormula } from '../../data/occupations';

const SkillList: FC = () => {
  const { state, api } = useAppContext();
  const { stats } = state;

  const onSelection = (val: OccupationSkillFormula) => {
    const occPoints = computeOccPoints(val);

    api.setState({ skillFormula: val, occPoints: occPoints });
  };

  const computeOccPoints = (val: OccupationSkillFormula) => {
    switch (val) {
      case OccupationSkillFormula.edu:
        return stats?.EDU || 0 * 4;
      case OccupationSkillFormula.eduApp:
        return (stats?.EDU || 0) * 2 + (stats?.APP || 0) * 2;
      case OccupationSkillFormula.eduCon:
        return (stats?.EDU || 0) * 2 + (stats?.CON || 0) * 2;
      case OccupationSkillFormula.eduDex:
        return (stats?.EDU || 0) * 2 + (stats?.DEX || 0) * 2;
      case OccupationSkillFormula.eduInt:
        return (stats?.EDU || 0) * 2 + (stats?.INT || 0) * 2;
      case OccupationSkillFormula.eduPow:
        return (stats?.EDU || 0) * 2 + (stats?.POW || 0) * 2;
      case OccupationSkillFormula.eduSiz:
        return (stats?.EDU || 0) * 2 + (stats?.SIZ || 0) * 2;
      case OccupationSkillFormula.eduStr:
        return (stats?.EDU || 0) * 2 + (stats?.STR || 0) * 2;
    }
  };

  return (
    <div style={{ display: 'block' }}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <OccSkillFormulaSelector
            options={state.selectedOccupation?.skillFormula || []}
            onSelection={onSelection}
          />
        </Grid>

        <Grid item>
          <Typography>Total Occupational Points: {state.occPoints}</Typography>
        </Grid>
      </Grid>
      <Grid item container direction="row" spacing={3}>
        {skillList.map((skill) => (
          <SkillItem skill={skill} key={skill.name} />
        ))}
      </Grid>
    </div>
  );
};

export default SkillList;
