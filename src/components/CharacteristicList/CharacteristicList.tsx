import React, { FC, useRef } from 'react';
import { Button, Grid, Hidden, Typography } from '@material-ui/core';
import { useAppContext } from '../../providers/AppContextProvider';
import styles from './CharacteristicList.style';
import { CharacteristicName, charKeys } from '../../data/types';
import { ReactComponent as Sigil } from '../../assets/Sigil_of_the_Gateway.svg';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import CallOfCharacterTitle from './CallOfCharacterTitle';

import { ArrowForward } from '@material-ui/icons';

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

  let imgVal = hoverVal
  let textVal

  let hideBig = true;
  let hideSmall = true;

  if (coreAttribute) {
    textVal = coreAttribute
    hideBig = false
  }

  if (hoverVal) {
    if (hoverVal !== coreAttribute) {
      textVal = hoverVal
      hideSmall = false
      hideBig = true;
    }
  }
  if (imgVal === 'CON') {
    imgVal = "COM";
  }




  return (


    <Grid container direction="column" justifyContent='space-between' alignItems='flex-start' style={{ height: '100dvh' }}>
      <Grid item container direction="row" justifyContent='space-between' alignContent='flex-start' style={{ display: 'fixed' }}>
        <Grid item >
          <CallOfCharacterTitle style={{ marginRight: 'auto' }} />
        </Grid>
        <Grid item>
          {!hideSmall && (<img src={`/img/${imgVal}.jpg`} className={clsx(classes.normalPic)} alt='current selection' />)}
          {!hideBig && (<img src={`/img/${coreAttribute + '-xray'}.jpg`} className={clsx(classes.bigPic)} alt='current selection' />)}
        </Grid>
        <Grid item>
          {textVal && <Typography className={classes.charName}>{CharacteristicName[textVal]}</Typography>}
        </Grid>
      </Grid>


      {/* Absolutely positioned */}

      <SpeedDial
        ariaLabel="Characteristic List"
        icon={<img src='/img/compass.png' className={classes.compass} style={{ transition: 'transform 0.25s', transform: open ? 'rotate(45deg)' : 'none' }} alt='make selection' />}
        classes={{ root: classes.compassRoot, fab: classes.fab, actions: classes.actions }}
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


      <Hidden smDown={coreAttribute !== undefined}>
        <Typography onMouseOver={handleOpen} className={clsx(classes.promptText, classes.leftText)}
          style={{

          }}>What do you most desire?</Typography>

      </Hidden>

      {coreAttribute !== undefined &&
        <Button onClick={() => nextStep()} className={classes.absoluteRightBtn} style={{ position: 'absolute' }}>
          <Typography className={clsx(classes.promptText, classes.rightText)}>Create your identity</Typography>
          <Sigil className={clsx(classes.sigil, classes.spookyIcon)} />
          <ArrowForward className={clsx(classes.arrow, classes.spookyIcon)} />
        </Button>
      }




    </Grid >








  );
};

export default CharacteristicList;
