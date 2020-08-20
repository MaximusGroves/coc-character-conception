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
  const { creatorStep, selectedArchetype } = state

  const { prevStep, nextStep } = api

  const currentWidth = useWidth()

  const getSelection = (step: number) => {
    switch (step) {
      case 0:
        return selectedArchetype?.name || ''
      case 1:
        return ''
      case 2:
        return ''
      case 3:
        return ''
      case 4:
        return ''
    }
  }

  return (
    <div>
      <Stepper
        activeStep={creatorStep}
        alternativeLabel={currentWidth === 'sm' || currentWidth === 'xs'}
        className={classes.stepper}
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
                {(currentWidth !== 'xs' || index === creatorStep) && (
                  <Typography className={classes.selectionStyle}>
                    {getSelection(index)}
                  </Typography>
                )}
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
          <IconButton color="primary" onClick={() => nextStep()}>
            <ArrowForward />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  )
}

export default CreatorStepper
