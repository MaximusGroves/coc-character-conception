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
import { ArrowBack, ArrowForward, Casino } from '@material-ui/icons';
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
    stats,
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
        return selectedTalent?.length === 2;
      case 3:
        return stats !== undefined;
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
          return lines?.map((val, idx) => (
            <span style={{ display: 'block' }} key={idx}>
              {val}
            </span>
          ));
        } else return selectedOccupation?.name || '';
      case 2:
        return (
          selectedTalent?.map((val, idx) => (
            <span style={{ display: 'block' }} key={idx}>
              {val.name}
            </span>
          )) || ''
        );
      case 3:
        return (
          <div
            style={{
              width: '100%',
              textAlign: 'center',
              display: 'flex',
              paddingLeft: 4,
            }}
          >
            {/* {state.coreAttribute} */}
            {stats && (
              <span style={{ margin: 'auto' }}>
                <Casino color="primary" />
                <Casino color="primary" />
                <Casino color="primary" />
              </span>
            )}
          </div>
        );
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


  let thisStep = 0;
  if (creatorStep) {
    thisStep = creatorStep - 1;
  }

  if (creatorStep === 0) {
    return null
  } else {



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
            disabled={creatorStep === 0}
          >
            <ArrowBack />
          </IconButton>
        </Grid>

        <Grid item className={classes.stepperParent}>
          <Stepper
            activeStep={thisStep}
            alternativeLabel={currentWidth === 'sm' || currentWidth === 'xs'}
            className={classes.stepper}
          >
            {stepKeys.list.map((key, index) => {
              return (
                <Step key={CreatorSteps[key]}>
                  <StepButton
                    onClick={() => {
                      setStep((index + 1));
                    }}
                    completed={getCompleted((index))}
                    disabled={false}
                    className={classes.stepLabelBtn}
                  >
                    <StepLabel>
                      {(currentWidth !== 'xs' && currentWidth !== 'sm') &&
                        CreatorSteps[key]}
                      {(currentWidth !== 'xs' && currentWidth !== 'sm') && (
                        <Typography
                          className={clsx(
                            classes.selectionStyle,
                            getSelectionStyle((index))
                          )}
                        >
                          {getSelection((index))}
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
            disabled={creatorStep === 5}
          >
            <ArrowForward />
          </IconButton>
        </Grid>
      </Grid>
    );
  }
};

export default CreatorStepper;
