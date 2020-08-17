import React, { FC } from 'react'
import {
  Paper,
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

export enum creatorSteps {
  archetype = 0,
  occupation,
  talents,
  characteristics,
  skills,
}

const CreatorStepper: FC = () => {
  const classes = styles()

  const steps = [
    'Select Archetype',
    'Select Occupation',
    'Select Talents',
    'Roll Characteristics',
    'Allocate Skills',
  ]

  const { state, api } = useAppContext()
  const { creatorStep } = state

  const { prevStep, nextStep } = api

  return (
    <div className={classes.root}>
      <Stepper activeStep={creatorStep}>
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
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>

      <Grid container className={classes.buttons}>
        <Grid item>
          <IconButton color="primary" onClick={() => prevStep()}>
            <ArrowBack />
          </IconButton>
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
