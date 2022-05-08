import React, { FC } from 'react';
import { Grid } from '@material-ui/core';
import { talentList } from '../../data/talents';
import TalentItem from './TalentItem';

const TalentList: FC = () => {
  return (
    <Grid container direction="row" spacing={3}>
      {talentList.map((talent) => (
        <TalentItem talent={talent} key={talent.name} />
      ))}
    </Grid>
  );
};

export default TalentList;
