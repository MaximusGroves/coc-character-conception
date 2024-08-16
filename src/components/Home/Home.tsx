import React, { FC } from 'react';
import styles from './Home.style';
import CreatorStepper from '../CreatorStepper/CreatorStepper';
import { stepArchetype, stepAttribute, stepCharacteristic, stepOccupation, stepSkill, stepTalent, useAppContext } from '../../providers/AppContextProvider';
import ArchetypeList from '../ArchetypeList/ArchetypeList';
import OccupationList from '../OccupationList/OccupationList';
import TalentList from '../TalentList/TalentList';
import { Drawer } from '@material-ui/core';
import Attributes from '../Attributes/Attributes';
import SkillList from '../SkillList/SkillList';
import CharacteristicList from '../CharacteristicList/CharacteristicList';

// import {useWidth} from '../../providers/AppThemeProvider'

const Home: FC = () => {
  const classes = styles();
  const { state } = useAppContext();
  const { creatorStep } = state;

  // const size = useWidth();

  return (
    <div className={creatorStep !== stepCharacteristic ? classes.root : classes.splash} id='root'>


      <div className={classes.container}>
        {creatorStep === stepCharacteristic && < CharacteristicList />}
        {creatorStep === stepArchetype && <ArchetypeList />}
        {creatorStep === stepOccupation && <OccupationList />}
        {creatorStep === stepTalent && <TalentList />}
        {creatorStep === stepAttribute && <Attributes />}
        {creatorStep === stepSkill && <SkillList />}

        {creatorStep !== stepCharacteristic && (


          <Drawer
            variant="permanent"
            anchor="bottom"
            classes={{
              paper: classes.drawerPaper,
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
