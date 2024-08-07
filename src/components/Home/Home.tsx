import React, { FC } from 'react';
import styles from './Home.style';
import CreatorStepper from '../CreatorStepper/CreatorStepper';
import { useAppContext } from '../../providers/AppContextProvider';
import ArchetypeList from '../ArchetypeList/ArchetypeList';
import OccupationList from '../OccupationList/OccupationList';
import TalentList from '../TalentList/TalentList';
import { Drawer, useMediaQuery } from '@material-ui/core';
import Attributes from '../Attributes/Attributes';
import SkillList from '../SkillList/SkillList';
import CharacteristicList from '../CharacteristicList/CharacteristicList';

// import {useWidth} from '../../providers/AppThemeProvider'

const Home: FC = () => {
  const classes = styles();
  const { state } = useAppContext();
  const { creatorStep } = state;

  // const size = useWidth();

  const fullTitles = useMediaQuery('(min-width:1000px)');

  return (
    <div className={creatorStep !== 0 ? classes.root : classes.splash}>


      <div className={classes.container}>
        {creatorStep === 0 && < CharacteristicList />}
        {creatorStep === 1 && <ArchetypeList />}
        {creatorStep === 2 && <OccupationList />}
        {creatorStep === 3 && <TalentList />}
        {creatorStep === 4 && <Attributes />}
        {creatorStep === 5 && <SkillList />}

        {creatorStep !== 0 && (


          <Drawer
            variant="permanent"
            anchor="bottom"
            classes={{
              paper: fullTitles ? classes.drawerPaper : classes.drawerShort,
            }}
          >
            <CreatorStepper />
          </Drawer>

        )}
      </div>
    </div>
  );
};

export default Home;
