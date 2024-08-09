import React, { FC, useRef } from 'react';
import { Button, Grid, Hidden, Paper, Typography } from '@material-ui/core';
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
import swap from 'lodash-move'

const CharacteristicList: FC = () => {

  const { api, state } = useAppContext()
  const { nextStep, selectCoreAttribute } = api
  const { coreAttribute } = state

  const compassRef = useRef();

  const [hoverVal, setHoverVal] = React.useState<string | undefined>(undefined);

  const [lastCore, setLastCore] = React.useState<string | undefined>(undefined);

  const classes = styles();

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
    document.onmouseup = () => { }
    setHoverVal(undefined);
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



    if (val === coreAttribute) {
      setLastCore(coreAttribute)
      console.log(`animate fade out - ${val}`)
      setTimeout(setLastCore, 700, undefined)
    } else {
      setLastCore(val)
    }

    selectCoreAttribute(val);
  }


  const charList = Object.values(charKeys.list);


  let textVal


  if (coreAttribute) {
    textVal = coreAttribute
  }

  if (hoverVal) {
    textVal = hoverVal
  }



  const fakeArch = archetypeList[0];
  const fakeOcc = occupationList[0];
  const fakeTalent = talentList[0];
  const fakeSkill = skillList[0];

  let coreIndex;
  let coreShuffle = [...charList];
  if (coreAttribute) {
    coreIndex = charList.indexOf(coreAttribute)
    coreShuffle = swap(charList, coreIndex, 0);
    // console.log(coreIndex)
  } else {
    // console.log('no shuffle')
  }

  console.log(`hover - ${hoverVal} | ${coreAttribute} - core | ${lastCore} - last`)



  return (


    <Grid container direction="column" justifyContent='space-between' alignItems='flex-start' style={{ height: '100dvh' }}>
      <Grid item container direction="row" justifyContent='space-between' alignContent='flex-start' style={{ display: 'fixed' }}>
        <Grid item >
          <CallOfCharacterTitle style={{ marginRight: 'auto' }} />
        </Grid>
        <Grid item>

          {lastCore && <img src={`/img/${lastCore}-xray.jpg`} style={{ opacity: !open && coreAttribute === undefined ? 0 : 1, }} className={clsx(classes.bigPic, classes.residualPic)} alt='current selection' />}

          {coreShuffle.map(val => (

            <img src={`/img/${val}-xray.jpg`} style={{ opacity: (open && hoverVal === val) || coreAttribute === val ? 1 : 0, }} className={clsx(classes.bigPic, classes.xRay)} alt='current selection' />

          ))}
          {charList.map(val => (

            <img src={`/img/${val}-frame.jpg`} style={{ opacity: hoverVal === val && coreAttribute !== hoverVal && open ? 1 : 0 }} className={clsx(classes.bigPic)} alt='current selection' />

          ))}

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
            icon={val === coreAttribute ? <Sigil className={classes.sigil} /> : <SpeedDialIcon />}
            tooltipTitle={
              <div
                className={classes.tooltipSpacer}
                style={{  }}>
                <Paper
                  style={{
                    padding: '4px 10px',
                    marginLeft: 16,
                    backgroundColor: val === coreAttribute ? '#333' : '#424242'
                  }}>
                  <Typography
                    className={classes.fancyTitle}
                  >
                    {CharacteristicName[val]}
                  </Typography>
                </Paper>
              </div>
            }
            // tooltipTitle={val}
            style={{ userSelect: 'none' }}
            // onClick={() => handleSelection(val)}
            tooltipPlacement='right'
            tooltipOpen
            onContextMenu={(e) => { e.preventDefault(); e.stopPropagation() }}
            onTouchStart={(e) => { setHoverVal(val); }}
            onTouchEnd={(e) => { handleSelection(val); e.stopPropagation(); e.preventDefault(); }}
            onMouseUp={(e) => { handleSelection(val); e.stopPropagation(); e.preventDefault(); }}
            onMouseOver={() => setHoverVal(val)}
            onMouseOut={() => setHoverVal(undefined)}
            FabProps={{ classes: { root: val === coreAttribute ? classes.speedDialAction : '' } }}
            classes={{ staticTooltipLabel: classes.unsetTooltip }}

          />
        ))}
      </SpeedDial>


      <Hidden smDown={coreAttribute !== undefined}>
        <Typography onMouseOver={handleOpen} className={clsx(classes.promptText, classes.leftText)}
          style={{
            cursor: 'pointer'
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
