import React, { FC } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { charKeys } from '../../data/types';

import { Casino } from '@material-ui/icons';

import { useAppContext } from '../../providers/AppContextProvider';
import CoreCharacteristicRadioGroup from './CoreCharacteristicRadioGroup';

const ArchetypeList: FC = () => {
  const [core, setCore] = React.useState<string>('all');
  const [stats, setStats] = React.useState<Record<string, number> | undefined>(
    undefined
  );
  const [rolls, setRolls] = React.useState<
    Record<string, number[]> | undefined
  >(undefined);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCore((event.target as HTMLInputElement).value);
  };

  const rolld6 = () => {
    return Math.ceil(Math.random() * 6);
  };

  const add = (val: number, a: number) => {
    return val + a;
  };

  const computeStats = () => {
    const newRolls = {
      core: [rolld6()],
      [charKeys.APP]: [rolld6(), rolld6(), rolld6()],
      [charKeys.CON]: [rolld6(), rolld6(), rolld6()],
      [charKeys.DEX]: [rolld6(), rolld6(), rolld6()],
      [charKeys.EDU]: [rolld6(), rolld6()],
      [charKeys.INT]: [rolld6(), rolld6()],
      [charKeys.POW]: [rolld6(), rolld6(), rolld6()],
      [charKeys.SIZ]: [rolld6(), rolld6()],
      [charKeys.STR]: [rolld6(), rolld6(), rolld6()],
    };

    setRolls(newRolls);

    const newStats = {
      [charKeys.APP]: newRolls[charKeys.APP].reduce(add, 0) * 5,
      [charKeys.CON]: newRolls[charKeys.CON].reduce(add, 0) * 5,
      [charKeys.DEX]: newRolls[charKeys.DEX].reduce(add, 0) * 5,
      [charKeys.EDU]: (newRolls[charKeys.EDU].reduce(add, 0) + 6) * 5,
      [charKeys.INT]: (newRolls[charKeys.INT].reduce(add, 0) + 6) * 5,
      [charKeys.POW]: newRolls[charKeys.POW].reduce(add, 0) * 5,
      [charKeys.SIZ]: (newRolls[charKeys.SIZ].reduce(add, 0) + 6) * 5,
      [charKeys.STR]: newRolls[charKeys.STR].reduce(add, 0) * 5,
    };

    newStats[core] = (newRolls.core.reduce(add, 0) + 13) * 5;

    setStats(newStats);
  };

  const { state } = useAppContext();

  return (
    <div>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <Typography>
            Your core attribute will be determined by rolling 1 die and
            calculating (1d6+13)x5
          </Typography>
          <Typography>
            Most of your interaction in the game will be expressed through this
            property
          </Typography>
        </Grid>
        <Grid item>
          <Typography>The remaining attributes adopt this formula:</Typography>
        </Grid>
        <Grid item style={{ marginLeft: 20 }}>
          <Typography>Strength (STR): roll 3D6 and multiply by 5</Typography>
          <Typography>
            Constitution (CON): roll 3D6 and multiply by 5
          </Typography>
          <Typography>Size (SIZ): roll 2D6+6 and multiply by 5</Typography>
          <Typography>Dexterity (DEX): roll 3D6 and multiply by 5</Typography>
          <Typography>Appearance (APP): roll 3D6 and multiply by 5</Typography>
          <Typography>
            Intelligence (INT): roll 2D6+6 and multiply by 5
          </Typography>
          <Typography>Power (POW): roll 3D6 and multiply by 5</Typography>
          <Typography>Education (EDU): roll 2D6+6 and multiply by 5</Typography>
        </Grid>
        <Grid item>
          <Typography>
            After which, the following minor characteristics will be computed
          </Typography>
        </Grid>
        <Grid item style={{ marginLeft: 20 }}>
          <Typography>Luck: roll 2D6+6 and multiply by 5</Typography>
          <Typography>Sanity points (SAN): equal to POW</Typography>
          <Typography>
            Hit points (HP): add CON and SIZ together, then divide the total by
            5 (round down)
          </Typography>
          <Typography>Magic points (MP): equal to one-fifth of POW</Typography>
          <Typography>
            Damage Bonus (DB) and Build: add STR to SIZ together and look up the
            total on Table 1: Damage Bonus and Build
          </Typography>
          <Typography>
            Movement Rate (MOV): compare DEX, STR, and SIZ as per Table 2:
            Movement Rates
          </Typography>
        </Grid>

        <Grid item>
          <Typography>Select Core Attribute</Typography>

          <CoreCharacteristicRadioGroup
            selection={core}
            onSelection={handleRadioChange}
            priority={state?.selectedArchetype?.core}
          />
        </Grid>

        <Grid item style={{ display: 'flex', width: '100%', margin: '40px 0' }}>
          <Button
            color="primary"
            variant="contained"
            size="large"
            style={{ margin: 'auto' }}
            onClick={() => {
              computeStats();
            }}
            disabled={core === 'all'}
          >
            <Casino fontSize="large" style={{ paddingRight: 10 }} />
            Roll for Attributes
          </Button>
        </Grid>
        {stats && (
          <Grid item>
            <Typography>{JSON.stringify(stats)}</Typography>
            <Typography>{JSON.stringify(rolls)}</Typography>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default ArchetypeList;
