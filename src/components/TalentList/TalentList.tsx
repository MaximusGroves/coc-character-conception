import React, { FC } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { talentList } from '../../data/talents';
import TalentItem from './TalentItem';
import styles from './TalentList.style';
import { msgs } from '../../data/copy';

const TalentList: FC = () => {

  const classes = styles();
  return (

    <>

      <Typography className={classes.titleTop}>How are you exceptional?</Typography>

      <Typography className={classes.msgText}>{msgs.msgTalents}</Typography>

      <Grid container direction="row" spacing={3} className={classes.listContainer}>
        {talentList.map((talent) => (
          <TalentItem talent={talent}
          // key={talent.name} 
          />
        ))}
      </Grid>
    </>
  );
};

export default TalentList;
