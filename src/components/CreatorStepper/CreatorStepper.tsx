import React, { FC } from 'react'
import {
  Grid,
  Typography,
  Stepper,
  Step,
  StepLabel,
  IconButton,
} from '@material-ui/core'
import styles from './CreatorStepper.style'
import { useAppContext } from '../../providers/AppContextProvider'
import { ArrowBack, ArrowForward } from '@material-ui/icons'
import { useWidth } from '../../providers/AppThemeProvider'

export enum creatorSteps {
  archetype = 0,
  occupation,
  talents,
  Characteristic,
  skills,
}

const CreatorStepper: FC = () => {
  const classes = styles()

  const steps = [
    'Select Archetype',
    'Select Occupation',
    'Select Talents',
    'Roll Characteristic',
    'Allocate Skills',
  ]

  const { state, api } = useAppContext()
  const { creatorStep } = state

  const { prevStep, nextStep } = api

  const currentWidth = useWidth()

  return (
    <div className={classes.stepperRoot}>
      <Stepper
        activeStep={creatorStep}
        alternativeLabel={currentWidth === 'sm' || currentWidth === 'xs'}
      >
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {}
          const labelProps: { optional?: React.ReactNode } = {}
          // if (isStepOptional(index)) {
          //   labelProps.optional = <Typography variant="caption">Optional</Typography>;
          // }
          // if (isStepSkipped(index)) {
          //   stepProps.completed = false;
          // }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>
                {(currentWidth !== 'xs' || index === creatorStep) && label}
              </StepLabel>
            </Step>
          )
        })}
      </Stepper>

      <Grid container className={classes.buttons} justify="center">
        <Grid item>
          <IconButton color="primary" onClick={() => prevStep()}>
            <ArrowBack />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography>{currentWidth}</Typography>
        </Grid>
        <Grid item>
          <IconButton color="primary" onClick={() => nextStep()}>
            <ArrowForward />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  )
}

export default CreatorStepper
