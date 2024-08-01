import React, { FC } from 'react';
import { Button, Typography } from '@material-ui/core';
// import styles from './ArchetypeList.style'
import CharacteristicRadioGroup from '../ArchetypeList/CharacteristicRadioGroup';
import { useAppContext } from '../../providers/AppContextProvider';
import styles from './CharacteristicList.style';
import { CharacteristicKey, CharacteristicName } from '../../data/types';

import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

const CharacteristicList: FC = () => {

  const { api } = useAppContext()
  const { nextStep } = api

  const [charFilter, setCharFilter] = React.useState<string>('dexterity-xray');

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCharFilter((event.target as HTMLInputElement).value);
  };

  const classes = styles();

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.characteristicRoot}>

      <Typography className={classes.titleTop}><span className={classes.titleEvenC}>C</span>ALL <span className={classes.titleEvenC}>OF</span></Typography>
      <Typography className={classes.titleBottom}><span className={classes.titleBigC}>C</span>HA<span className={classes.title1}>R</span>A<span className={classes.title1}>C</span>TE<span className={classes.titleBigR}>R</span></Typography>


      <Typography className={classes.charName}>DEXTERITY</Typography>

      {/* 
      <CharacteristicRadioGroup
        selection={charFilter}
        onSelection={handleRadioChange}
      />
      <Button onClick={() => nextStep()} variant="contained" color="primary">Begin</Button> */}


      {/* <img src='/img/compass.png' className={classes.compass} /> */}



      {charFilter !== 'All' && (<img src={`/img/${charFilter}.jpg`} className={classes.formula} />)}


      <SpeedDial
        ariaLabel="Characteristic List"

        className={classes.speedDial}
        // hidden={hidden}
        icon={<img src='/img/compass.png' className={classes.compass} style={{ transition: 'transform 0.25s', transform: open ? 'rotate(45deg)' : 'none' }} />}
        classes={{ fab: classes.fab, actions: classes.actions }}
        // FabProps={{
        // }}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction={'right'}
      >
        <SpeedDialAction
          key={'strength'}
          icon={<SpeedDialIcon />}
          tooltipTitle={''}
          onClick={handleClose}
        />

      </SpeedDial>
    </div>
  );
};

export default CharacteristicList;
