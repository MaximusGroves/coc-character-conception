import React, { FC } from 'react';
import styles from './HomeMobile.style';

import { useAppContext } from '../../providers/AppContextProvider';
import ArchetypeList from '../ArchetypeList/ArchetypeList';
import OccupationList from '../OccupationList/OccupationList';
import TalentList from '../TalentList/TalentList';
import Attributes from '../Attributes/Attributes';
import {
  Grid,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

import { CreatorSteps, stepKeys } from '../../data/types';
// import {useWidth} from '../../providers/AppThemeProvider'
import clsx from 'clsx';
import SkillList from '../SkillList/SkillList';
import CharacteristicList from '../CharacteristicList/CharacteristicList';

const HomeMobile: FC = () => {
  const classes = styles();
  const { state, api } = useAppContext();
  const {
    creatorStep,
    selectedArchetype,
    selectedOccupation,
    selectedTalent,
  } = state;
  const { setStep } = api;

  // const size = useWidth();

  const getStepComponent = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        return <ArchetypeList />;
      case 2:
        return <OccupationList />;
      case 3:
        return <TalentList />;
      case 4:
        return <Attributes />;
      case 5:
        return <SkillList />;
    }
  };

  const getSelection = (step: number) => {
    switch (step) {
      case 1:
        return selectedArchetype?.name || '';
      case 2:
        return selectedOccupation?.name || '';
      case 3:
        return selectedTalent?.map((val) => val.name).join(', ') || '';
      case 4:
        return '';
      case 5:
        return '';
    }
  };

  const getSelectionStyle = (step: number) => {
    switch (step) {
      case 1:
        return classes.selectionStyleArchetype;
      case 2:
        return classes.selectionStyleOccupation;
      case 3:
        return classes.selectionStyleTalent;
      case 4:
        return classes.selectionStyle;
      case 5:
        return classes.selectionStyle;
    }
  };

  return (
    <div className={creatorStep !== 0 ? classes.root : classes.splash}>
      {/* <Stepper activeStep={creatorStep} orientation="vertical" className={classes.mobileStepper}>
        {stepKeys.list.map((key, index) => (
          <Step key={CreatorSteps[key]}>
            <StepLabel>{CreatorSteps[key]}</StepLabel>
            <StepContent className={classes.stepContent}>{getStepComponent(index)}</StepContent>
          </Step>
        ))}
      </Stepper> */}



      {creatorStep === 0 && < CharacteristicList />}
      {creatorStep !== 0 &&

        <>
          {
            stepKeys.list.map((key, index) => (
              <Accordion
                expanded={creatorStep === index + 1}
                TransitionProps={{ unmountOnExit: true }}
                onChange={() => setStep(index + 1)}
                key="key"
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                  className={classes.summary}
                >
                  <Grid container direction="column">
                    <Grid item>
                      <Typography>{CreatorSteps[key]}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        className={clsx(
                          classes.selectionStyle,
                          getSelectionStyle(index + 1)
                        )}
                      >
                        {getSelection(index + 1)}
                      </Typography>
                    </Grid>
                  </Grid>
                </AccordionSummary>
                <AccordionDetails className={classes.stepContent}>
                  {getStepComponent(index + 1)}
                </AccordionDetails>
              </Accordion>
            ))
          }
        </>}
    </div>
  );
};

export default HomeMobile;
