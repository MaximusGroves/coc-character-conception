import React, { FC } from 'react';
import { Grid, Typography } from '@material-ui/core';
// import styles from './ArchetypeList.style'
import { archetypeList } from '../../data/archetypes';
import CharacteristicRadioGroup from './CharacteristicRadioGroup';
import ArchetypeItem from './ArchetypeItem';
import { useAppContext } from '../../providers/AppContextProvider';
import styles from './ArchetypeList.style';


const ArchetypeList: FC = () => {

  const { state } = useAppContext();

  const classes = styles();

  const [charFilter, setCharFilter] = React.useState<string>(state.coreAttribute || 'All');

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCharFilter((event.target as HTMLInputElement).value);
  };

  const filteredArchetypes = archetypeList.filter((archetype) => {
    return (
      charFilter === 'All' ||
      archetype.core.find((val) => {
        return val === charFilter;
      })
    );
  });



  return (
    <div>

      <Typography className={classes.titleTop}>How will you be remembered?</Typography>


      <CharacteristicRadioGroup
        selection={charFilter}
        onSelection={handleRadioChange}
      />

      <Grid container direction="row" spacing={3} className={classes.listContainer}>
        {filteredArchetypes.map((archetype) => (
          <ArchetypeItem
            archetype={archetype}
            // key={archetype.name}
            keyName={archetype.name}
          />
        ))}
      </Grid>
    </div>
  );
};

export default ArchetypeList;
