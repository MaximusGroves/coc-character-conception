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
import { CreatorSteps, CreatorStepKeys } from '../../data/types'
import { useWidth } from '../../providers/AppThemeProvider'

const CreatorStepper: FC = () => {
  const classes = styles()

  const { state, api } = useAppContext()
  const { creatorStep, selectedArchetype, selectedOccupation } = state

  const { prevStep, nextStep } = api

  const currentWidth = useWidth()

  const getSelection = (step: number) => {
    switch (step) {
      case 0:
        return selectedArchetype?.name || ''
      case 1:
        return selectedOccupation?.name || ''
      case 2:
        return ''
      case 3:
        return ''
      case 4:
        return ''
    }
  }

  const getSelectionStyle = (step: number) => {
    switch (step) {
      case 0:
        return classes.selectionStyle
      case 1:
        return classes.selectionStyleOccupation
      case 2:
        return classes.selectionStyle
      case 3:
        return classes.selectionStyle
      case 4:
        return classes.selectionStyle
    }
  }

  return (
    <div>
      <Stepper
        activeStep={creatorStep}
        alternativeLabel={currentWidth === 'sm' || currentWidth === 'xs'}
        className={classes.stepper}
      >
        {CreatorStepKeys.map((key, index) => {
          const stepProps: { completed?: boolean } = {}
          const labelProps: { optional?: React.ReactNode } = {}
          // if (isStepOptional(index)) {
          //   labelProps.optional = <Typography variant="caption">Optional</Typography>;
          // }
          // if (isStepSkipped(index)) {
          //   stepProps.completed = false;
          // }
          return (
            <Step key={CreatorSteps[key]} {...stepProps}>
              <StepLabel {...labelProps}>
                {(currentWidth !== 'xs' || index === creatorStep) &&
                  CreatorSteps[key]}
                {(currentWidth !== 'xs' || index === creatorStep) && (
                  <Typography className={getSelectionStyle(index)}>
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
