import React, { FC, useRef } from 'react';
import { Button, Icon, Typography } from '@material-ui/core';
// import styles from './ArchetypeList.style'
import CharacteristicRadioGroup from '../ArchetypeList/CharacteristicRadioGroup';
import { useAppContext } from '../../providers/AppContextProvider';
import styles from './CharacteristicList.style';
import { CharacteristicKey, CharacteristicName, charKeys } from '../../data/types';
import { ReactComponent as Sigil } from '../../assets/Sigil_of_the_Gateway.svg';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import CallOfCharacterTitle from './CallOfCharacterTitle';

import { ArrowForward } from '@material-ui/icons';

import { green, purple, darkPurple } from '../../providers/AppThemeProvider';
import clsx from 'clsx';


const CharacteristicList: FC = () => {

  const { api, state } = useAppContext()
  const { nextStep, selectCoreAttribute } = api
  const { coreAttribute } = state

  const compassRef = useRef();

  const [hoverVal, setHoverVal] = React.useState<string | undefined>(undefined);

  const classes = styles();

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
    document.onmouseup = () => { }
  };

  const handleOpen = () => {
    setOpen(true);

    document.onmouseup = (e) => {

      try {
        // @ts-ignore
        if (compassRef.current && !compassRef.current.contains(e.target)) {
          handleClose()
        }
      } catch (err) {
        document.onmouseup = () => { }
      }
    }
  };

  const handleToggle = () => {
    open ? handleClose() : handleOpen();
  }

  const handleSelection = (val) => {
    selectCoreAttribute(val);
  }


  const charList = Object.values(charKeys.list);

  let imgVal
  let textVal

  if (coreAttribute) {
    imgVal = coreAttribute + '-xray'
    textVal = coreAttribute
  }

  if (hoverVal) {
    if (hoverVal !== coreAttribute) {
      imgVal = hoverVal
      textVal = hoverVal
    }
  }
  if (imgVal === 'CON') {
    imgVal = "COM";
  }




  return (

    <div className={classes.characteristicRoot}>

      <CallOfCharacterTitle />




      {imgVal && (<img src={`/img/${imgVal}.jpg`} className={classes.formula} />)}

      {textVal && <Typography className={classes.charName}>{CharacteristicName[textVal]}</Typography>}


      <SpeedDial
        ariaLabel="Characteristic List"
        className={classes.speedDial}
        icon={<img src='/img/compass.png' className={classes.compass} style={{ transition: 'transform 0.25s', transform: open ? 'rotate(45deg)' : 'none' }} />}
        classes={{ fab: classes.fab, actions: classes.actions }}
        onOpen={handleOpen}
        onClick={handleToggle}
        open={open}
        direction={'up'}
        ref={compassRef}
      >

        {charList.map(val => (

          <SpeedDialAction
            key={val}
            icon={<SpeedDialIcon />}
            tooltipTitle={CharacteristicName[val]}
            // tooltipTitle={val}
            onClick={() => handleSelection(val)}
            tooltipPlacement='right'
            tooltipOpen
            onMouseOver={() => setHoverVal(val)}
            onMouseOut={() => setHoverVal(undefined)}
            classes={{}}
            TooltipClasses={{}}

          />

        ))}



      </SpeedDial>

      <Typography style={{ position: 'absolute', bottom: 60, left: 85, fontSize: 20 }} className={classes.titleTop}>What do you most desire?</Typography>

      {coreAttribute && <Button onClick={() => nextStep()} style={{ position: 'absolute', right: 0, bottom: 27, borderRadius: 1000 }}>
        <Typography className={classes.titleTop} style={{ fontSize: 20, textTransform: 'none', paddingRight: 10 }}>Create Your Identity</Typography>
        <Sigil className={clsx(classes.sigil, classes.spookyIcon)} />
        <ArrowForward className={clsx(classes.arrow, classes.spookyIcon)} />
      </Button>}

    </div >
  );
};

export default CharacteristicList;
