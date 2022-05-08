import React, { FC } from 'react';
import {
  Grid,
  Typography,
  Stepper,
  Step,
  StepLabel,
  IconButton,
  StepButton,
} from '@material-ui/core';
import styles from './CreatorStepper.style';
import { useAppContext } from '../../providers/AppContextProvider';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import { CreatorSteps, stepKeys } from '../../data/types';
import { useWidth } from '../../providers/AppThemeProvider';
import clsx from 'clsx';

const CreatorStepper: FC = () => {
  const classes = styles();

  const { state, api } = useAppContext();
  const {
    creatorStep,
    selectedArchetype,
    selectedOccupation,
    selectedTalent,
  } = state;

  const { nextStep, prevStep, setStep } = api;

  const currentWidth = useWidth();

  const getCompleted = (step: number) => {
    switch (step) {
      case 0:
        return selectedArchetype !== undefined;
      case 1:
        return selectedOccupation !== undefined;
      case 2:
        return selectedTalent.length === 2;
      case 3:
        return false;
      case 4:
        return false;
    }
  };

  const getSelection = (step: number) => {
    switch (step) {
      case 0:
        return selectedArchetype?.name || '';
      case 1:
        const lines = selectedOccupation?.name.split(' ');
        if (lines?.length === 2) {
          return lines?.map((val) => (
            <span style={{ display: 'block' }}>{val}</span>
          ));
        } else return selectedOccupation?.name || '';
      case 2:
        return (
          selectedTalent.map((val) => (
            <span style={{ display: 'block' }}>{val.name}</span>
          )) || ''
        );
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
    <Grid
      container
      direction="row"
      alignItems="center"
      justify="space-between"
      className={classes.stepperRoot}
    >
      <Grid item>
        <IconButton
          color="primary"
          onClick={() => prevStep()}
          className={classes.btnLeft}
        >
          <ArrowBack />
        </IconButton>
      </Grid>

      <Grid item className={classes.stepperParent}>
        <Stepper
          activeStep={creatorStep}
          alternativeLabel={currentWidth === 'sm' || currentWidth === 'xs'}
          className={classes.stepper}
        >
          {stepKeys.list.map((key, index) => {
            return (
              <Step key={CreatorSteps[key]}>
                <StepButton
                  onClick={() => {
                    setStep(index);
                  }}
                  completed={getCompleted(index)}
                  disabled={false}
                  className={classes.stepLabelBtn}
                >
                  <StepLabel>
                    {(currentWidth !== 'xs' || index === creatorStep) &&
                      CreatorSteps[key]}
                    {(currentWidth !== 'xs' || index === creatorStep) && (
                      <Typography
                        className={clsx(
                          classes.selectionStyle,
                          getSelectionStyle(index)
                        )}
                      >
                        {getSelection(index)}
                      </Typography>
                    )}
                  </StepLabel>
                </StepButton>
              </Step>
            );
          })}
        </Stepper>
      </Grid>

      <Grid item>
        <IconButton
          color="primary"
          onClick={() => nextStep()}
          className={classes.btnRight}
        >
          <ArrowForward />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default CreatorStepper;
