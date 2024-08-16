import React, { FC } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { skillList, skills } from '../../data/skills';
import SkillItem from './SkillItem';
import { useAppContext } from '../../providers/AppContextProvider';
import styles from './SkillList.style';
import { useWidth } from '../../providers/AppThemeProvider';
import clsx from 'clsx';
import { msgs } from '../../data/copy';
import TitleLinked from './TitleLinked';


const SkillList: FC = () => {
  const { state, api } = useAppContext();
  const { stats, selectedArchetype, selectedOccupation, archPoints, occPoints, intPoints, archSkills, occSkills, intSkills } = state;
  const { setState, getMaxOccPoints } = api;

  const currentWidth = useWidth();

  const classes = styles()

  const setArchPoints = (skill, val, remaining) => {
    const newSkills = archSkills;
    newSkills[skill] = val;
    setState({ archPoints: remaining, archSkills: newSkills });
  }

  const setOccPoints = (skill, val, remaining) => {
    const newSkills = occSkills;
    newSkills[skill] = val;
    setState({ occPoints: remaining, occSkills: newSkills });
  }

  const setIntPoints = (skill, val, remaining) => {
    const newSkills = intSkills;
    newSkills[skill] = val;
    setState({ intPoints: remaining, intSkills: newSkills })
  }


  const investedList: string[] = [];

  for (var key in archSkills) {
    // check also if property is not inherited from prototype
    if (archSkills[key] !== 0) {
      investedList.push(key);
    }
  }

  for (var key2 in occSkills) {
    // check also if property is not inherited from prototype
    if (archSkills[key2] !== 0) {
      investedList.push(key2);
    }
  }


  const remainingList = skillList.filter(remainingVal => {
    const match = investedList.find(investedKey => {
      const matchingKey = Object.keys(skills).find(key => skills[key] === remainingVal);
      return matchingKey === investedKey;

    })
    return (match === undefined)
  })

  const recommitPoints = () => {
    if (intPoints !== undefined && occPoints !== undefined && occPoints > 0) {
      const sum = intPoints + occPoints;
      setState({ intPoints: sum, occPoints: 0 })
    }
  }

  const getSpacing = () => {
    switch (currentWidth) {
      case 'xl': return 3;
      case 'lg': return 2;
      case 'md': return 2;
      case 'sm': return 2;
      case 'xs': return 1;
    }
  }

  const archetypeRef = React.useRef<HTMLDivElement>(null);
  const occupationRef = React.useRef<HTMLDivElement>(null);
  const personalRef = React.useRef<HTMLDivElement>(null);

  return (
    <div style={{ display: 'block' }}>

      <Typography className={classes.titleTop}>What can you do?</Typography>
      <Typography className={classes.msgText}>{msgs.msgSkills}</Typography>

      <TitleLinked title="Archetype Skills" thisRef={archetypeRef} nextRef={occupationRef} />

      {selectedArchetype && archPoints !== undefined ? <>





        <Typography className={clsx(classes.titleTop, classes.pointsLeft)} >{archPoints}</Typography>
        <Typography className={classes.minorText}>Points Remaining</Typography>
        <Typography style={{ textShadow: '1px 1px 1px #000' }}>{`Your Archetype of ${selectedArchetype?.name} affords you 100 points to upgrade any of these skills`}</Typography>

        <Grid item container direction="row" spacing={getSpacing()} className={classes.selectableGroup}>
          {selectedArchetype?.bonusSkills.map((skill) => {
            const thisSkill = skills[skill];
            // const thisName = thisSkill.name;
            const occTotal = occSkills[skill] || 0;
            const intTotal = intSkills[skill] || 0
            const minPoints = thisSkill.startingValue + occTotal + intTotal

            return (
              <SkillItem skill={thisSkill}
                // key={thisName}
                pointsRemaining={archPoints} minPoints={minPoints} points={archSkills[skill] || 0} setPointsRemaining={setArchPoints} />
            )
          })}
        </Grid>

      </> : <>
        <Grid container direction="column" spacing={2} style={{ marginTop: 20 }}>
          <Grid item>

            <Typography style={{ textShadow: '1px 1px 1px #000' }}>Select an Archetype to allocate skills</Typography>
          </Grid>
        </Grid>
      </>
      }


      <TitleLinked title="Occupation Skills" thisRef={occupationRef} prevRef={archetypeRef} nextRef={personalRef} />
      {
        selectedOccupation && occPoints !== undefined ? <>
          <Grid container direction="column" spacing={2}  >

            <Grid item>




              <Typography className={clsx(classes.titleTop, classes.pointsLeft)}>{occPoints}</Typography>
              <Typography className={classes.minorText}>Points Remaining</Typography>
              <Typography style={{ textShadow: '1px 1px 1px #000' }}>{`Your Occupation of ${selectedOccupation?.name} and statistics affords you ${getMaxOccPoints(selectedOccupation, stats)} skill points to upgrade any of these skills`}</Typography>
            </Grid>
          </Grid>

          <Grid item container direction="row" spacing={getSpacing()} className={classes.selectableGroup}>
            {selectedOccupation.skills.map((skill) => {
              const thisSkill = skills[skill];
              const thisName = thisSkill.name;
              const archTotal = archSkills[skill] || 0;
              const intTotal = intSkills[skill] || 0
              const minPoints = thisSkill.startingValue + archTotal + intTotal

              return (
                <SkillItem skill={thisSkill} key={thisName} pointsRemaining={occPoints} minPoints={minPoints} points={occSkills[skill] || 0} setPointsRemaining={setOccPoints} />
              )
            })}
          </Grid>

          <Grid item style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <Button variant='contained' onClick={recommitPoints} className={clsx(classes.titleTop, classes.recommitBtn)}>Commit remainder of points to Personal Interests Below</Button>
          </Grid>

        </> : <>
          <Grid container direction="column" spacing={2} >
            <Grid item>

              <Typography style={{ textShadow: '1px 1px 1px #000' }}>Select an Occupation and Roll Attributes to allocate skills</Typography>
            </Grid>
          </Grid>
        </>
      }




      <TitleLinked title="Personal Interest Skills" thisRef={personalRef} prevRef={occupationRef} />

      {
        stats && intPoints !== undefined ? <>
          <Grid container direction="column" spacing={2}>

            <Grid item>

              <Typography className={clsx(classes.titleTop, classes.pointsLeft)}>{intPoints}</Typography>
              <Typography className={classes.minorText}>Points Remaining</Typography>
              <Typography style={{ textShadow: '1px 1px 1px #000' }} >{`Your Intelligence stat of ${stats.INT} affords you ${stats.INT * 2} personal interest skill points to upgrade any skill`}</Typography>
              <Typography style={{ textShadow: '1px 1px 1px #000', marginTop: 20 }}>{`Previously invested skills are listed first, you may upgrade them or invest in something brand new`}</Typography>

            </Grid>
          </Grid>


          <Grid item container direction="row" spacing={getSpacing()} className={classes.selectableGroup}>
            {investedList.map((skill) => {
              const thisSkill = skills[skill];
              const thisName = thisSkill.name;
              const occTotal = occSkills[skill] || 0;
              const archTotal = archSkills[skill] || 0
              const minPoints = thisSkill.startingValue + occTotal + archTotal

              return (
                <SkillItem skill={thisSkill} key={thisName} pointsRemaining={intPoints} minPoints={minPoints} points={intSkills[skill] || 0} setPointsRemaining={setIntPoints} />
              )
            })}
          </Grid>

          <Grid container direction="column" spacing={2} style={{ marginTop: 20 }}>

            <Grid item>
              <Typography style={{ textShadow: '1px 1px 1px #000' }}>{`All other skills`}</Typography>
            </Grid>
          </Grid>



          <Grid item container direction="row" spacing={getSpacing()} className={classes.selectableGroup}>
            {remainingList.map((skill) => {
              const thisName = skill.name;
              const matchingKey = Object.keys(skills).find(key => skills[key] === skill) || '';
              const archTotal = archSkills[matchingKey] || 0;
              const occTotal = occSkills[matchingKey] || 0
              const minPoints = skill.startingValue + archTotal + occTotal
              return (
                <SkillItem skill={skill} key={thisName} minPoints={minPoints} pointsRemaining={intPoints} points={intSkills[matchingKey] || 0} setPointsRemaining={setIntPoints} />
              )
            })}
          </Grid>


        </> : <>
          <Grid container direction="column" spacing={2} style={{ marginTop: 20 }}>
            <Grid item>

              <Typography style={{ textShadow: '1px 1px 1px #000' }}>Roll Attributes to allocate skills</Typography>
            </Grid>
          </Grid>
        </>
      }





    </div >
  );
};

export default SkillList;
