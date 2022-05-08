import React, { FC } from 'react';
import { Grid } from '@material-ui/core';
import { talentList } from '../../data/talents';
import TalentItem from './TalentItem';
import styles from './TalentList.style';

const TalentList: FC = () => {
  const classes = styles();

  return (
    <div className={classes.itemContainer}>
      <Grid container direction="row" spacing={3}>
        {talentList.map((talent) => (
          <TalentItem talent={talent} key={talent.name} />
        ))}
      </Grid>
    </div>
  );
};

export default TalentList;
