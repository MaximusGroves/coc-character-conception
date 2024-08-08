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
import { archetypeList } from '../../data/archetypes';
import ArchetypeItem from '../ArchetypeList/ArchetypeItem';
import OccupationItem from '../OccupationList/OccupationItem';
import { occupationList } from '../../data/occupations';
import TalentItem from '../TalentList/TalentItem';
import SkillItem from '../SkillList/SkillItem';
import { talentList } from '../../data/talents';
import { skillList } from '../../data/skills';


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
    textVal = hoverVal
    hideSmall = false
    hideBig = true;
  }
  if (imgVal === 'CON') {
    imgVal = "COM";
  }


  const fakeArch = archetypeList[0];
  const fakeOcc = occupationList[0];
  const fakeTalent = talentList[0];
  const fakeSkill = skillList[0];

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
            FabProps={{ classes: { root: classes.speedDialAction } }}
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

      <div style={{ opacity: 0, position: 'absolute', left: -1000, top: -1000, zIndex: -1000, height: 10, width: 10 }}>
        <ArchetypeItem
          archetype={fakeArch}
          // key={archetype.name}
          keyName={fakeArch.name}
        />
        <OccupationItem
          occupation={fakeOcc}
        />
        <TalentItem talent={fakeTalent}

        />
        <SkillItem skill={fakeSkill}
          // key={thisName} 
          pointsRemaining={0} minPoints={0} points={0} setPointsRemaining={() => { }} />
        <img src={'/img/bg1.png'} alt="preloading asset" />
        <img src={'/img/banner1.png'} alt="preloading asset" />


      </div>

    </Grid>




  );
};

export default CharacteristicList;
