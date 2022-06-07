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
      case 0:
        return <ArchetypeList />;
      case 1:
        return <OccupationList />;
      case 2:
        return <TalentList />;
      case 3:
        return <Attributes />;
      case 4:
        return <div style={{ height: '100vh' }} />;
    }
  };

  const getSelection = (step: number) => {
    switch (step) {
      case 0:
        return selectedArchetype?.name || '';
      case 1:
        return selectedOccupation?.name || '';
      case 2:
        return selectedTalent?.map((val) => val.name).join(', ') || '';
      case 3:
        return '';
      case 4:
        return '';
    }
  };

  const getSelectionStyle = (step: number) => {
    switch (step) {
      case 0:
        return classes.selectionStyleArchetype;
      case 1:
        return classes.selectionStyleOccupation;
      case 2:
        return classes.selectionStyleTalent;
      case 3:
        return classes.selectionStyle;
      case 4:
        return classes.selectionStyle;
    }
  };

  return (
    <div className={classes.root}>
      {/* <Stepper activeStep={creatorStep} orientation="vertical" className={classes.mobileStepper}>
        {stepKeys.list.map((key, index) => (
          <Step key={CreatorSteps[key]}>
            <StepLabel>{CreatorSteps[key]}</StepLabel>
            <StepContent className={classes.stepContent}>{getStepComponent(index)}</StepContent>
          </Step>
        ))}
      </Stepper> */}
      {stepKeys.list.map((key, index) => (
        <Accordion
          expanded={creatorStep === index}
          TransitionProps={{ unmountOnExit: true }}
          onChange={() => setStep(index)}
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
                    getSelectionStyle(index)
                  )}
                >
                  {getSelection(index)}
                </Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails className={classes.stepContent}>
            {getStepComponent(index)}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default HomeMobile;
