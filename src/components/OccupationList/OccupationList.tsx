import React, { FC } from 'react';
import { Grid, Typography } from '@material-ui/core';
// import styles from './OccupationList.style'
// import { archetypeList } from '../../data/archetypes'
import { OccupationKey } from '../../data/types';
import { occupationList, Occupation } from '../../data/occupations';
// import CharacteristicRadioGroup from './CharacteristicRadioGroup'
import OccupationItem from './OccupationItem';
import IdealOccupationSwitch from './IdealOccupationSwitch';
import { useAppContext } from '../../providers/AppContextProvider';
import styles from './OccupationList.style';
import { msgs } from '../../data/copy';

const OccupationList: FC = () => {
  const { state } = useAppContext();
  const { selectedArchetype } = state;

  const classes = styles();

  const [ideal, setIdeal] = React.useState<boolean>(true);

  const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIdeal(event.target.checked);
  };

  const switchDisabled = selectedArchetype === undefined;

  let shownOccupations = occupationList;

  const archetypeOccs = selectedArchetype?.occupations || [];



  //matching archetype listed occupations
  if (ideal && !switchDisabled) {
    shownOccupations = occupationList.filter((occ: Occupation) => {
      const onList = archetypeOccs.find((archetypeOccKey: OccupationKey) => {
        return occ.key === archetypeOccKey;
      });
      return onList !== undefined;
    });
  }

  return (
    <div>

      <Typography className={classes.titleTop}>What is the life you've known until now?</Typography>

      <Typography className={classes.msgText}>{msgs.msgOccupation}</Typography>

      <IdealOccupationSwitch
        checked={ideal}
        onCheck={handleSwitch}
        disabled={switchDisabled}
      />

      <Grid container direction="row" spacing={3} className={classes.listContainer}>
        {shownOccupations.map((occupation) => (
          <OccupationItem occupation={occupation}
          // key={occupation.name} 
          />
        ))}
      </Grid>
    </div>
  );
};

export default OccupationList;
