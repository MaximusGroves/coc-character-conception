import React, { FC } from 'react';
import { Button, Typography } from '@material-ui/core';
// import styles from './ArchetypeList.style'
import CharacteristicRadioGroup from '../ArchetypeList/CharacteristicRadioGroup';
import { useAppContext } from '../../providers/AppContextProvider';
import styles from './CharacteristicList.style';
import { CharacteristicKey, CharacteristicName } from '../../data/types';


const CharacteristicList: FC = () => {

  const { api } = useAppContext()
  const { nextStep } = api

  const [charFilter, setCharFilter] = React.useState<string>('All');

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCharFilter((event.target as HTMLInputElement).value);
  };

  const classes = styles();



  return (
    <div className={classes.characteristicRoot}>

      <Typography className={classes.titleTop}><span className={classes.titleEvenC}>C</span>ALL <span className={classes.titleEvenC}>OF</span></Typography>
      <Typography className={classes.titleBottom}><span className={classes.titleBigC}>C</span>HA<span className={classes.title1}>R</span>A<span className={classes.title1}>C</span>TE<span className={classes.titleBigR}>R</span></Typography>


      <CharacteristicRadioGroup
        selection={charFilter}
        onSelection={handleRadioChange}
      />
      <Button onClick={() => nextStep()} variant="contained" color="primary">Begin</Button>

      <img src='/img/compass.png' className={classes.compass} />
      {charFilter !== 'All' && (<img src={`/img/${CharacteristicName[charFilter as CharacteristicKey]}.jpg`} className={classes.formula} />)}

    </div>
  );
};

export default CharacteristicList;
