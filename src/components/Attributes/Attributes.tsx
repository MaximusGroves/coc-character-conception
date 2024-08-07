import React, { FC, useRef } from 'react';
import { Button, Grid, IconButton, Typography, useMediaQuery } from '@material-ui/core';
import { CharacteristicName, charKeys } from '../../data/types';

import { Lock, LockOpen } from '@material-ui/icons';

import { useAppContext } from '../../providers/AppContextProvider';

import { useSprings, animated } from '@react-spring/web'
import { useGesture } from 'react-use-gesture'
import clamp from 'lodash.clamp'
import swap from 'lodash-move'
import styles from './Attribute.style';

import { green } from '../../providers/AppThemeProvider';


const ArchetypeList: FC = () => {
  const { state, api } = useAppContext();
  const { setStats, setState } = api;
  const { coreAttribute, stats, rolls, luck } = state;

  const restRef = useRef(false);

  const buttonHeightAndPadding = 56;

  let items1;
  let items2;

  if (stats) {

    items1 = [charKeys.EDU, charKeys.POW, charKeys.INT, charKeys.APP, charKeys.DEX, charKeys.SIZ, charKeys.CON, charKeys.STR];
    // items2 = items1.map(val => stats[val]);
    items2 = [90, 80, 70, 60, 60, 50, 50, 40]
  } else {
    items1 = [charKeys.EDU, charKeys.POW, charKeys.INT, charKeys.APP, charKeys.DEX, charKeys.SIZ, charKeys.CON, charKeys.STR];
    items2 = [90, 80, 70, 60, 60, 50, 50, 40]
  }

  const lockBtns = [0, 1, 2, 3, 4, 5, 6, 7]
  const firstLocked = [false, false, false, false, false, false, false, false]
  if (coreAttribute) {
    const coreIndex = items1.indexOf(coreAttribute);
    firstLocked[coreIndex] = true;
    const val90 = items2.splice(0, 1);
    items2.splice(coreIndex, 0, val90[0])
  }

  const applyStats = () => {
    console.log('applyStats')

    const newStats = {};
    const newRolls = [[], [], []];

    for (var i = 0; i < items1.length; i++) {

      newStats[items1[order1.current[i]]] = items2[order2.current[i]];
      //@ts-ignore
      newRolls[0].push(order1.current[i])
      //@ts-ignore
      newRolls[1].push(order2.current[i])
      //@ts-ignore
      newRolls[2].push(order3.current[i])
    }
    setStats(newStats, newRolls)

  }


  const [lockedAtts, setLockedAtts] = React.useState(firstLocked)

  const classes = styles();

  const rolld6 = () => {
    return Math.ceil(Math.random() * 6);
  };



  const fn = (order: number[], active = false, originalIndex = 0, curIndex = 0, y = 0) => (index: number) =>
    active && index === originalIndex
      ? {
        y: curIndex * buttonHeightAndPadding + y,
        scale: 1.1,
        zIndex: 1,
        immediate: (key: string) => key === 'y' || key === 'zIndex',

      }
      : {
        y: order.indexOf(index) * buttonHeightAndPadding,
        scale: 1,
        zIndex: 0,
        immediate: false,
        onRest: () => { if (restRef.current === true) { applyStats(); restRef.current = false; } },
      }


  const softAlign = (order: number[]) => (index: number) => {
    return ({
      y: order.indexOf(index) * buttonHeightAndPadding,
      scale: 1,
      zIndex: 0,
      immediate: false,
    }
    )
  }


  const lastCurRow = useRef(undefined);
  const lastRowLocked = useRef(undefined);

  const order1 = useRef(items1.map((_, index) => index)) // Store indicies as a local ref, this represents the item order
  if (rolls) {
    order1.current = (rolls[0]);
  }
  const [springs1, springApi1] = useSprings(items1.length, fn(order1.current)) // Create springs, each corresponds to an item, controlling its transform, scale, etc.
  //@ts-ignore
  const bind1 = useGesture({
    onDrag: (({ args: [originalIndex], active, movement: [, y] }) => {
      const curIndex = order1.current.indexOf(originalIndex)
      const lockIndex = order3.current[curIndex];
      const rowLocked = lockedAtts[lockIndex]

      if (lastRowLocked.current === undefined) {
        //@ts-ignore
        lastRowLocked.current = rowLocked;
      }


      const curRow = clamp(Math.round((curIndex * buttonHeightAndPadding + y) / buttonHeightAndPadding), 0, items1.length - 1)
      const newRowLocked = lockedAtts[order3.current[curRow]];

      // console.log(newRowLocked);

      let newOrder;
      let newOrder2;
      let newOrder3;

      console.log(`${curRow} ${lastCurRow.current} ${rowLocked} ${newRowLocked}`)

      newOrder = swap(order1.current, curIndex, curRow)
      springApi1.start(fn(newOrder, active, originalIndex, curIndex, y))

      if (rowLocked && lastRowLocked.current) {
        //drag all rows together
        const origIndex2 = order2.current[curIndex];
        const origIndex3 = order3.current[curIndex];
        newOrder2 = swap(order2.current, curIndex, curRow)
        newOrder3 = swap(order3.current, curIndex, curRow)
        springApi2.start(fn(newOrder2, active, origIndex2, curIndex, y))
        springApi3.start(fn(newOrder3, active, origIndex3, curIndex, y))
      } else if (newRowLocked && lastCurRow.current !== undefined && lastCurRow.current !== curRow) {
        console.log('hmm?')
        //nudge row when crossing locked one
        //@ts-ignore
        const nextDelta = lastCurRow.current > curRow ? 1 : -1;
        newOrder2 = swap(order2.current, curRow + nextDelta, curRow)
        newOrder3 = swap(order3.current, curRow + nextDelta, curRow)

        springApi3.start(softAlign(newOrder3))
        springApi2.start(softAlign(newOrder2))
        order2.current = newOrder2
        order3.current = newOrder3
      }
      lastCurRow.current = curRow;

      if (!active) { //onRelease
        order1.current = newOrder

        if (rowLocked && lastRowLocked.current) {
          //just for locked rows, 
          order2.current = newOrder2
          order3.current = newOrder3
        }
        lastRowLocked.current = undefined;
      }
    }),
    onDragEnd: (() => { applyStats() }),
  })


  const order2 = useRef(items2.map((_, index) => index)) // Store indicies as a local ref, this represents the item order
  if (rolls) {
    order2.current = (rolls[1]);
  }
  const [springs2, springApi2] = useSprings(items2.length, fn(order2.current)) // Create springs, each corresponds to an item, controlling its transform, scale, etc.
  //@ts-ignore
  const bind2 = useGesture({
    onDrag: (({ args: [originalIndex], active, movement: [, y] }) => {
      // const curIndex = order2.current.indexOf(originalIndex)
      // const curRow = clamp(Math.round((curIndex * buttonHeightAndPadding + y) / buttonHeightAndPadding), 0, items2.length - 1)
      // const newOrder = swap(order2.current, curIndex, curRow)
      // springApi2.start(fn(newOrder, active, originalIndex, curIndex, y)) // Feed springs new style data, they'll animate the view without causing a single render
      // if (!active) order2.current = newOrder

      const curIndex = order2.current.indexOf(originalIndex)
      const lockIndex = order3.current[curIndex];
      const rowLocked = lockedAtts[lockIndex]

      if (lastRowLocked.current === undefined) {
        //@ts-ignore
        lastRowLocked.current = rowLocked;
      }

      const curRow = clamp(Math.round((curIndex * buttonHeightAndPadding + y) / buttonHeightAndPadding), 0, items2.length - 1)
      const newRowLocked = lockedAtts[order3.current[curRow]];

      let newOrder;
      let newOrder1;
      let newOrder3;

      newOrder = swap(order2.current, curIndex, curRow)
      springApi2.start(fn(newOrder, active, originalIndex, curIndex, y))

      if (rowLocked && lastRowLocked.current) {
        //drag all rows together
        const origIndex1 = order1.current[curIndex];
        const origIndex3 = order3.current[curIndex];
        newOrder1 = swap(order1.current, curIndex, curRow)
        newOrder3 = swap(order3.current, curIndex, curRow)
        springApi1.start(fn(newOrder1, active, origIndex1, curIndex, y))
        springApi3.start(fn(newOrder3, active, origIndex3, curIndex, y))
      } else if (newRowLocked && lastCurRow.current !== undefined && lastCurRow.current !== curRow) {
        //nudge row when crossing locked one
        //@ts-ignore
        const nextDelta = lastCurRow.current > curRow ? 1 : -1;
        newOrder1 = swap(order1.current, curRow + nextDelta, curRow)
        newOrder3 = swap(order3.current, curRow + nextDelta, curRow)

        springApi1.start(softAlign(newOrder1))
        springApi3.start(softAlign(newOrder3))
        order1.current = newOrder1
        order3.current = newOrder3
      }
      lastCurRow.current = curRow;

      if (!active) { //onRelease
        order2.current = newOrder

        if (rowLocked && lastRowLocked.current) {
          //just for locked rows, 
          order1.current = newOrder1
          order3.current = newOrder3
        }
        lastRowLocked.current = undefined;
      }
    }),
    onDragEnd: (() => { applyStats() }),
  })

  const order3 = useRef(lockBtns.map((_, index) => index))
  if (rolls) {
    order3.current = rolls[2]
  }
  const [springs3, springApi3] = useSprings(lockBtns.length, softAlign(order3.current)) // Create springs, each corresponds to an item, controlling its transform, scale, etc.


  const onRandomize = () => {
    const newOrder1 = []
    const newOrder2 = []

    const lastOrder1 = [...order1.current]
    const lastOrder2 = [...order2.current]

    let prevSpliced = 0;

    for (var i = 0; i < lockedAtts.length; i++) {
      if (lockedAtts[order3.current[i]]) {
        lastOrder1.splice(i - prevSpliced, 1);
        lastOrder2.splice(i - prevSpliced, 1);
        prevSpliced++
      }
    }

    while (lastOrder1.length > 0) {

      const index = Math.floor(Math.random() * (lastOrder1.length))
      const val1 = lastOrder1.splice(index, 1)
      // @ts-ignore
      newOrder1.push(val1[0])
    }

    while (lastOrder2.length > 0) {
      const index = Math.floor(Math.random() * (lastOrder2.length))
      const val2 = lastOrder2.splice(index, 1)
      // @ts-ignore
      newOrder2.push(val2[0])
    }

    const finalOrder1 = []
    const finalOrder2 = []

    for (var j = 0; j < lockedAtts.length; j++) {
      if (lockedAtts[order3.current[j]]) {
        const new1 = order1.current[j];
        const new2 = order2.current[j];
        //@ts-ignore
        finalOrder1.push(new1)
        //@ts-ignore
        finalOrder2.push(new2)
      } else {
        const new1 = newOrder1.shift();
        const new2 = newOrder2.shift();
        //@ts-ignore
        finalOrder1.push(new1)
        //@ts-ignore
        finalOrder2.push(new2)
      }
    }

    order1.current = finalOrder1;
    order2.current = finalOrder2;
    restRef.current = true;
    springApi1.start(fn(finalOrder1))
    springApi2.start(fn(finalOrder2))
  }

  //@ts-ignore
  const HP = (stats?.CON + stats?.SIZ) / 5;
  //@ts-ignore
  const MP = (stats?.POW / 5)

  React.useEffect(() => {
    if (stats === undefined) {
      onRandomize()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const computeDamageBonus = () => {
    if (stats) {
      const sum = stats?.STR + stats?.SIZ;
      if (sum < 65) {
        return ['-2', '-2']
      } else if (sum < 85) {
        return ['-1', '-1']
      } else if (sum < 125) {
        return ['0', '0']
      } else if (sum < 165) {
        return ['+1d4', '+1']
      } else if (sum < 205) {
        return ['+1d6', '+2']
      } else if (sum < 285) {
        return ['+2d6', '+3']
      } else if (sum < 365) {
        return ['+3d6', '+4']
      } else if (sum < 445) {
        return ['+4d6', '+5']
      } else {
        return ['+5d6', '+6']
      }

    } else {
      return ['', '']
    }
  }

  const computeMovementRate = () => {
    if (stats) {
      if (stats.DEX < stats.SIZ && stats.STR < stats.SIZ) {
        return 7
      } else if (stats.STR > stats.SIZ && stats.DEX > stats.SIZ) {
        return 9
      } else {
        return 8
      }
    }
  }

  const [DB, build] = computeDamageBonus();
  const movement = computeMovementRate();

  const computeLuck = () => {
    const die1 = rolld6();
    const die2 = rolld6();
    const total = (die1 + die2 + 6) * 5;
    setState({ luck: [total, die1, die2] })
  }

  let myLuck;
  let myDie1;
  let myDie2;
  let myPhrase;

  if (luck) {
    myLuck = luck[0]
    myDie1 = luck[1]
    myDie2 = luck[2]
    myPhrase = `Rolled a ${myDie1} and a ${myDie2}`
  }

  const singleRow = useMediaQuery('(min-width:600px)');

  console.log(singleRow);

  return (
    <div style={{ display: 'flex' }}>
      <Grid container direction="column">
        <Grid item>
          <Typography style={{}} className={classes.titleTop}>What are you made of?</Typography>
        </Grid>
        <Grid container direction='row'>
          <Grid item sm md container direction="column" >
            <Grid item style={{ paddingTop: 440, paddingLeft: 56 }}>
              <Button variant='contained' onClick={onRandomize} className={classes.titleTop} style={{ marginTop: 20, backgroundColor: `${green}`, color: 'white', textTransform: 'none' }}>Randomize</Button>
            </Grid>
          </Grid>
          <Grid item md container direction="column" spacing={3} >
            <Grid item >
              <Typography style={{ textShadow: '1px 1px 1px #000' }}>HP: <span style={{ fontWeight: 'bold', fontSize: 25 }}>{HP || '  '}</span></Typography>
              <Typography style={{ textShadow: '1px 1px 1px #000' }}>= ( CON + SIZ ) / 5</Typography>
            </Grid>
            <Grid item>
              <Typography style={{ textShadow: '1px 1px 1px #000' }}>Sanity: <span style={{ fontWeight: 'bold', fontSize: 25 }}>{stats?.POW || '  '}</span></Typography>
              <Typography style={{ textShadow: '1px 1px 1px #000' }}>= POW</Typography>
            </Grid>
            <Grid item>
              <Typography style={{ textShadow: '1px 1px 1px #000' }}>MP: <span style={{ fontWeight: 'bold', fontSize: 25 }}>{MP || '  '}</span></Typography>
              <Typography style={{ textShadow: '1px 1px 1px #000' }}>= POW / 5</Typography>
            </Grid>
            <Grid item>
              <Typography style={{ textShadow: '1px 1px 1px #000' }}>Damage Bonus: <span style={{ fontWeight: 'bold', fontSize: 25 }}>{DB || '  '}</span></Typography>
              <Typography style={{ textShadow: '1px 1px 1px #000' }}>Table 1 page 23</Typography>
            </Grid>
            <Grid item>
              <Typography style={{ textShadow: '1px 1px 1px #000' }}>Build: <span style={{ fontWeight: 'bold', fontSize: 25 }}>{build || '  '}</span></Typography>
              <Typography style={{ textShadow: '1px 1px 1px #000' }}>Table 1 page 23 Pulp Cthulhu</Typography>
            </Grid>
            <Grid item>
              <Typography style={{ textShadow: '1px 1px 1px #000' }}>Movement Rate: <span style={{ fontWeight: 'bold', fontSize: 25 }}>{movement || '  '}</span></Typography>
              <Typography style={{ textShadow: '1px 1px 1px #000' }}>Table 2 page 23 Pulp Cthulhu</Typography>
            </Grid>
            <Grid item>
              <Typography style={{ textShadow: '1px 1px 1px #000' }}>Luck <span style={{ fontWeight: 'bold', fontSize: 25 }}>{myLuck || '  '}</span></Typography>
              <Typography style={{ textShadow: '1px 1px 1px #000' }}>= ( 2d6 + 6 ) * 5</Typography>
              {luck ?
                <Typography style={{ textShadow: '1px 1px 1px #000' }}>{myPhrase}</Typography>
                :
                <Button variant='contained' disabled={stats === undefined} onClick={computeLuck} className={classes.titleTop} style={{ marginTop: 20, backgroundColor: `${green}`, color: 'white', textTransform: 'none' }}>Roll for Luck Now!</Button>
              }

            </Grid>
          </Grid>
        </Grid>
      </Grid>




      <div style={{ position: 'absolute', top: 77, left: 16 }}>
        <div className={classes.draglist} style={{ height: items1.length * buttonHeightAndPadding }}>
          {springs3.map(({ zIndex, y, scale }, i) => (
            <animated.div
              key={i}
              style={{
                zIndex,
                y,
                scale,
                border: lockedAtts[i] ? `2px solid ${green}99` : '2px solid #ffffff00',
                cursor: 'pointer',
                borderRadius: '50px 16px 16px 50px',
                width: 264,
                transition: 'border 0.3s',


              }}
              className={classes.lockList}
              children={
                <IconButton
                  color={lockedAtts[i] ? "primary" : "default"}
                  onClick={
                    () => {
                      const newList = [...lockedAtts];
                      newList[i] = !lockedAtts[i];
                      setLockedAtts(newList);
                    }
                  }>
                  {lockedAtts[i] ? <Lock /> : <LockOpen />}
                </IconButton>
              }

            />
          ))}
        </div>
      </div>



      <div style={{ position: 'absolute', top: 80, left: 80 }}>
        <div className={classes.draglist} style={{ height: items1.length * buttonHeightAndPadding }}>
          {springs1.map(({ zIndex, y, scale }, i) => (
            <animated.div
              {...bind1(i)}
              key={i}
              style={{
                zIndex,
                y,
                scale,
                cursor: 'pointer'
              }}
              className={classes.listContent}
              children={CharacteristicName[items1[i]]}
            />
          ))}
        </div>
      </div>
      <div style={{ position: 'absolute', top: 80, left: 236 }}>
        <div className={classes.draglist} style={{ height: items1.length * buttonHeightAndPadding }}>
          {springs2.map(({ zIndex, y, scale }, i) => (
            <animated.div
              {...bind2(i)}
              key={i}
              style={{
                zIndex,
                y,
                scale,
                fontSize: 30, padding: 4,
                cursor: 'pointer',
                color: items2[i] === 90 ? green : 'white'
              }}
              className={classes.listContent}
              children={items2[i]}
            />
          ))}
        </div>
      </div>



    </div >
  );
};

export default ArchetypeList;




//  <Grid container direction="column" spacing={3}>
//         <Grid item>
//           <Typography>
//             Your core attribute will be determined by rolling 1 die and
//             calculating (1d6+13)x5
//           </Typography>
//           <Typography>
//             Most of your interaction in the game will be expressed through this
//             property
//           </Typography>
//         </Grid>
//         <Grid item>
//           <Typography>The remaining attributes adopt this formula:</Typography>
//         </Grid>
//         <Grid item style={{ marginLeft: 20 }}>
//           <Typography>Strength (STR): roll 3D6 and multiply by 5</Typography>
//           <Typography>
//             Constitution (CON): roll 3D6 and multiply by 5
//           </Typography>
//           <Typography>Size (SIZ): roll 2D6+6 and multiply by 5</Typography>
//           <Typography>Dexterity (DEX): roll 3D6 and multiply by 5</Typography>
//           <Typography>Appearance (APP): roll 3D6 and multiply by 5</Typography>
//           <Typography>
//             Intelligence (INT): roll 2D6+6 and multiply by 5
//           </Typography>
//           <Typography>Power (POW): roll 3D6 and multiply by 5</Typography>
//           <Typography>Education (EDU): roll 2D6+6 and multiply by 5</Typography>
//         </Grid>
//         <Grid item>
//           <Typography>
//             After which, the following minor characteristics will be computed
//           </Typography>
//         </Grid>
//         <Grid item style={{ marginLeft: 20 }}>
//           <Typography>Luck: roll 2D6+6 and multiply by 5</Typography>
//           <Typography>Sanity points (SAN): equal to POW</Typography>
//           <Typography>
//             Hit points (HP): add CON and SIZ together, then divide the total by
//             5 (round down)
//           </Typography>
//           <Typography>Magic points (MP): equal to one-fifth of POW</Typography>
//           <Typography>
//             Damage Bonus (DB) and Build: add STR to SIZ together and look up the
//             total on Table 1: Damage Bonus and Build
//           </Typography>
//           <Typography>
//             Movement Rate (MOV): compare DEX, STR, and SIZ as per Table 2:
//             Movement Rates
//           </Typography>
//         </Grid>

//  <Grid item>
//           <Typography>Select Core Attribute</Typography>

//           <CoreCharacteristicRadioGroup
//             selection={state.coreAttribute}
//             onSelection={handleRadioChange}
//             priority={state?.selectedArchetype?.core}
//           />
//         </Grid>

//  <Grid item style={{ display: 'flex', width: '100%', margin: '40px 0' }}>
//         <Button
//           color="primary"
//           variant="contained"
//           size="large"
//           style={{ margin: 'auto' }}
//           onClick={() => {
//             computeStats();
//           }}
//           disabled={state.coreAttribute === undefined}
//         >
//           <Casino fontSize="large" style={{ paddingRight: 10 }} />
//           Roll for Attributes
//         </Button>
//       </Grid>
//  {state.stats && (
//         <Grid item>
//           <Typography>{JSON.stringify(state.stats)}</Typography>
//           <Typography>{JSON.stringify(state.rolls)}</Typography>
//         </Grid>


// const add = (val: number, a: number) => {
//   return val + a;
// };

// const computeStats = () => {
//   const newRolls = {
//     core: [rolld6()],
//     [charKeys.APP]: [rolld6(), rolld6(), rolld6()],
//     [charKeys.CON]: [rolld6(), rolld6(), rolld6()],
//     [charKeys.DEX]: [rolld6(), rolld6(), rolld6()],
//     [charKeys.EDU]: [rolld6(), rolld6()],
//     [charKeys.INT]: [rolld6(), rolld6()],
//     [charKeys.POW]: [rolld6(), rolld6(), rolld6()],
//     [charKeys.SIZ]: [rolld6(), rolld6()],
//     [charKeys.STR]: [rolld6(), rolld6(), rolld6()],
//   };

//   const newStats = {
//     [charKeys.APP]: newRolls[charKeys.APP].reduce(add, 0) * 5,
//     [charKeys.CON]: newRolls[charKeys.CON].reduce(add, 0) * 5,
//     [charKeys.DEX]: newRolls[charKeys.DEX].reduce(add, 0) * 5,
//     [charKeys.EDU]: (newRolls[charKeys.EDU].reduce(add, 0) + 6) * 5,
//     [charKeys.INT]: (newRolls[charKeys.INT].reduce(add, 0) + 6) * 5,
//     [charKeys.POW]: newRolls[charKeys.POW].reduce(add, 0) * 5,
//     [charKeys.SIZ]: (newRolls[charKeys.SIZ].reduce(add, 0) + 6) * 5,
//     [charKeys.STR]: newRolls[charKeys.STR].reduce(add, 0) * 5,
//   };

//   if (state.coreAttribute) {
//     newStats[state.coreAttribute] = (newRolls.core.reduce(add, 0) + 13) * 5;
//   }

//   // setStats(newStats, newRolls);


// };