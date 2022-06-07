import React, { FC } from 'react';
import styles from './Home.style';
import CreatorStepper from '../CreatorStepper/CreatorStepper';
import { useAppContext } from '../../providers/AppContextProvider';
import ArchetypeList from '../ArchetypeList/ArchetypeList';
import OccupationList from '../OccupationList/OccupationList';
import TalentList from '../TalentList/TalentList';
import { Drawer } from '@material-ui/core';
import Attributes from '../Attributes/Attributes';
import SkillList from '../SkillList/SkillList';

// import {useWidth} from '../../providers/AppThemeProvider'

const Home: FC = () => {
  const classes = styles();
  const { state } = useAppContext();
  const { creatorStep } = state;

  // const size = useWidth();

  return (
    <div className={classes.root}>
      {creatorStep === 0 && <ArchetypeList />}
      {creatorStep === 1 && <OccupationList />}
      {creatorStep === 2 && <TalentList />}
      {creatorStep === 3 && <Attributes />}
      {creatorStep === 4 && <SkillList />}

      <Drawer
        variant="permanent"
        anchor="bottom"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <CreatorStepper />
      </Drawer>
    </div>
  );
};

export default Home;
