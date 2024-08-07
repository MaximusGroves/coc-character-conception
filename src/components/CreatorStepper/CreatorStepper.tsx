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
import { ReactComponent as Sigil } from '../../assets/Sigil_of_the_Gateway.svg';
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
    archPoints,
    occPoints,
    intPoints
  } = state;

  const { nextStep, prevStep, setStep } = api;

  const currentWidth = useWidth();

  let pointsTotal

  if (archPoints !== undefined && occPoints !== undefined && intPoints !== undefined) {
    pointsTotal = archPoints + occPoints + intPoints;
  }

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
        return pointsTotal === 0;
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
        // pointsTotal === undefined ? '?' : pointsTotal === 0 ? pointsTotal : pointsTotal;
        return (<div
          style={{
            width: '100%',
            textAlign: 'center',
            display: 'flex',
            paddingLeft: 4,
          }}
        >
          {(pointsTotal === 0) ? (
            <span style={{ margin: 'auto' }}>
              <Sigil className={clsx(classes.sigil)} />
            </span>
          ) : (
            <span style={{ margin: 'auto' }}><span>
              {pointsTotal === undefined ? '?' : pointsTotal}
              {/* <Sigil className={clsx(classes.sigil)} /> */}
            </span><span style={{ fontSize: '0.875rem', paddingLeft: 5 }}>pts</span></span>
          )}
        </div>)

    }
  };



  const getSelectionStyle = (step: number) => {
    switch (step) {
      case 0:
        return clsx(classes.selectionStyleArchetype, classes.titleShadow);
      case 1:
        return clsx(classes.selectionStyleOccupation, classes.titleShadow);
      case 2:
        return clsx(classes.selectionStyleTalent, classes.titleShadow);
      case 3:
        return classes.selectionStyle;
      case 4:
        return clsx(classes.pointText, pointsTotal !== undefined && classes.titleShadow);
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
            alternativeLabel={currentWidth === 'sm' || currentWidth === 'xs' || currentWidth === 'md'}
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
                    <StepLabel style={{ marginTop: -4 }}>
                      {(currentWidth !== 'xs' && currentWidth !== 'sm' && currentWidth !== 'md') &&
                        <span style={{ marginTop: 0 }}>{CreatorSteps[key]}</span>}
                      {(currentWidth !== 'xs' && currentWidth !== 'sm' && currentWidth !== 'md') && (
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
