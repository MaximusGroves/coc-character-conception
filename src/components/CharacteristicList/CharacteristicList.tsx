import React, { FC, useRef } from 'react';
import { Button, Grid, IconButton, Paper, Typography } from '@material-ui/core';
import { useAppContext } from '../../providers/AppContextProvider';
import styles from './CharacteristicList.style';
import { CharacteristicName, charKeys } from '../../data/types';
import { ReactComponent as Sigil } from '../../assets/Sigil_of_the_Gateway.svg';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import InfoIcon from '@material-ui/icons/InfoOutlined';
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
import { msgs } from '../../data/copy';
import { useWidth } from '../../providers/AppThemeProvider';

const CharacteristicList: FC = () => {

  const { api, state } = useAppContext()
  const { nextStep, selectCoreAttribute } = api
  const { coreAttribute } = state

  const compassRef = useRef();

  const [hoverVal, setHoverVal] = React.useState<string | undefined>(undefined);

  const [lastCore, setLastCore] = React.useState<string | undefined>(undefined);

  const [touchHeld, setTouchHeld] = React.useState(false);

  const [previewFrame, setPreviewFrame] = React.useState(false);

  const [infoDown, setInfoDown] = React.useState(false)

  const classes = styles();

  const hoverTimerRef = useRef<number | undefined>();
  // const touchHeldRef = useRef<number | undefined>();

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


  const setDelayedTouch = () => {
    if (!bigWidth) {
      clearTimeout(hoverTimerRef.current)
      hoverTimerRef.current = setTimeout(setTouchHeld, 1000, true);
    }
  }

  const handleSelection = (val) => {

    if (val === coreAttribute) {
      setLastCore(coreAttribute)
      // console.log(`animate fade out - ${val}`)
      handleClose();
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

  // console.log(`hover - ${hoverVal} | ${coreAttribute} - core | ${lastCore} - last`)

  const currentWidth = useWidth()
  const smallWidth = currentWidth === 'xs' || currentWidth === 'sm'
  const bigWidth = currentWidth === 'xl' || currentWidth === 'lg'

  return (


    <Grid container direction="column" justifyContent='space-between' alignItems='flex-start' style={{ height: '100dvh' }}>
      <Grid item container direction="row" justifyContent='space-between' alignContent='flex-start' style={{ display: 'fixed' }}>
        <Grid item >
          <CallOfCharacterTitle style={{ marginRight: 'auto' }} className={classes.titleRoot} />
        </Grid>
        <Grid item>

          {lastCore &&
            <img
              src={`/img/${lastCore}-xray.jpg`}
              style={{ opacity: !open && coreAttribute === undefined ? 0 : 1, }}
              className={clsx(classes.bigPic, classes.residualPic, classes.unselectable)}
              alt='current selection'
            />
          }

          {coreShuffle.map(val => (

            <img
              src={`/img/${val}-xray.jpg`}
              style={{ opacity: (open && hoverVal === val) || coreAttribute === val ? 1 : 0, }}
              className={clsx(classes.bigPic, classes.xRay, classes.unselectable)}
              alt='current selection'
            />

          ))}
          {charList.map(val => (

            <img
              src={`/img/${val}-frame.jpg`}
              style={{ opacity: (hoverVal === val && coreAttribute !== hoverVal && open) || (previewFrame && coreAttribute === val) ? 1 : 0 }}
              className={clsx(classes.bigPic, classes.unselectable)}
              alt='current selection'
            />

          ))}


          <button
            // src={`/img/${coreAttribute}-frame.jpg`}
            // alt='acting as button'
            className={clsx(classes.blockPic, classes.unselectable)}
            // style={{ opacity: 1 }}
            onMouseDown={() => { setPreviewFrame(true); handleClose() }}
            onMouseUp={() => setPreviewFrame(false)}
            onTouchStart={(e) => { setPreviewFrame(true); handleClose() }}
            onTouchEnd={(e) => { setPreviewFrame(false); e.stopPropagation(); e.preventDefault(); }}
            onContextMenu={(e) => { e.preventDefault(); e.stopPropagation() }}

          >
            {smallWidth &&
              <div className={classes.attributeFlavorText}
                style={{
                  opacity:
                    hoverVal !== undefined ||
                      (coreAttribute !== undefined && !smallWidth) ||
                      infoDown
                      ? 1 : 0,
                  transition: (hoverVal !== undefined ||
                    (coreAttribute !== undefined && !smallWidth))
                    && !infoDown
                    ? 'opacity 1s 0.9s' : 'opacity 0.3s'
                }}>
                <Typography className={classes.flavorFont}>
                  {msgs[`msg${hoverVal || coreAttribute || lastCore}`]}
                </Typography>
              </div>
            }

          </button>



        </Grid>
        <Grid item>
          {textVal && <Typography className={classes.charName}>{CharacteristicName[textVal]}</Typography>}
        </Grid>
      </Grid>


      {/* Absolutely positioned */}


      <IconButton
        style={{ opacity: smallWidth && coreAttribute && !open ? 1 : 0, transition: 'opacity 0.3s', position: 'absolute' }}
        color="primary"
        className={clsx(classes.infobtn, classes.unselectable)}
        onMouseDown={() => setInfoDown(true)}
        onMouseUp={() => setInfoDown(false)}
        onTouchStart={() => setInfoDown(true)}
        onTouchEnd={() => setInfoDown(false)}
        onContextMenu={(e) => { e.preventDefault(); e.stopPropagation() }}
      >
        <InfoIcon style={{ width: 40, height: 'auto' }} className={classes.unselectable} />
      </IconButton>


      {
        !smallWidth &&
        <div className={classes.attributeFlavorText} style={{ opacity: hoverVal !== undefined || (coreAttribute !== undefined && !smallWidth) ? 1 : 0 }}>
          <Typography className={classes.flavorFont}>
            {msgs[`msg${hoverVal || coreAttribute || lastCore}`]}
          </Typography>
        </div>
      }

      <SpeedDial
        ariaLabel="Characteristic List"
        icon={
          <img src='/img/compass.png'
            className={classes.compass}
            style={{
              transition: 'transform 0.25s',
              transform: open ? 'rotate(45deg)' : 'none'
            }}
            alt='make selection' />}
        classes={{
          root: clsx(classes.compassRoot, classes.unselectable),
          fab: clsx(classes.fab, classes.unselectable),
          actions: classes.actions
        }}
        className={classes.unselectable}
        onOpen={handleOpen}
        onClick={handleToggle}
        onContextMenu={(e) => { e.preventDefault(); e.stopPropagation() }}
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
                // style={{ opacity: touchHeld ? 0 : 1, transition: touchHeld ? 'opacity 0.3s 0.5s' : 'opacity 0.3s' }}>
                style={{ opacity: touchHeld ? 0 : 1, transition: 'opacity 0.7s' }}>
                <Paper
                  style={{
                    padding: '4px 10px',
                    marginLeft: 16,
                    backgroundColor: val === coreAttribute ? '#333' : '#424242'
                  }}
                  className={classes.unselectable}

                >
                  <Typography
                    className={classes.fancyTitle}
                  >
                    {CharacteristicName[val]}
                  </Typography>
                </Paper>
              </div>
            }
            // tooltipTitle={val}
            className={classes.unselectable}
            // onClick={() => handleSelection(val)}
            tooltipPlacement='right'
            tooltipOpen
            onContextMenu={(e) => { e.preventDefault(); e.stopPropagation() }}
            onTouchStart={(e) => { setHoverVal(val); setTouchHeld(true); }}
            onTouchEnd={(e) => { handleSelection(val); setTouchHeld(false); setHoverVal(undefined); e.stopPropagation(); e.preventDefault(); }}
            onMouseUp={(e) => { handleSelection(val); e.stopPropagation(); e.preventDefault(); setTouchHeld(false); clearTimeout(hoverTimerRef.current) }}
            onMouseOver={() => { setHoverVal(val); setDelayedTouch() }}
            onMouseOut={() => { setHoverVal(undefined); setTouchHeld(false); clearTimeout(hoverTimerRef.current) }}
            FabProps={{ classes: { root: val === coreAttribute ? classes.speedDialAction : '' } }}
            classes={{ staticTooltipLabel: classes.unsetTooltip }}

          />
        ))}
      </SpeedDial>

      <Typography
        onMouseOver={handleOpen}
        className={clsx(classes.promptText, classes.leftText, coreAttribute !== undefined && classes.hiddenText)}
        style={{
          cursor: 'pointer'
        }}>What do you most desire?</Typography>

      {
        coreAttribute !== undefined &&
        <Button onClick={() => nextStep()} className={classes.absoluteRightBtn} >
          <Typography className={clsx(classes.promptText, classes.rightText)}>Create your identity</Typography>
          <Sigil className={clsx(classes.sigil, classes.spookyIcon)} />
          <ArrowForward className={clsx(classes.arrow, classes.spookyIcon)} />
        </Button>
      }






      {/* this is a cheater way to preload all the assets used on other tabs to prevent pop-in */}
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



    </Grid >




  );
};

export default CharacteristicList;
