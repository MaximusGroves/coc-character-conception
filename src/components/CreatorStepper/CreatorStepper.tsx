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
import clsx from 'clsx'

const CreatorStepper: FC = () => {
  const classes = styles()

  const { state, api } = useAppContext()
  const {
    creatorStep,
    selectedArchetype,
    selectedOccupation,
    selectedTalent,
  } = state

  const { nextStep, prevStep } = api

  const currentWidth = useWidth()

  const getSelection = (step: number) => {
    switch (step) {
      case 0:
        return selectedArchetype?.name || ''
      case 1:
        return selectedOccupation?.name || ''
      case 2:
        return selectedTalent?.name || ''
      case 3:
        return ''
      case 4:
        return ''
    }
  }

  const getSelectionStyle = (step: number) => {
    switch (step) {
      case 0:
        return classes.selectionStyleArchetype
      case 1:
        return classes.selectionStyleOccupation
      case 2:
        return classes.selectionStyleTalent
      case 3:
        return classes.selectionStyle
      case 4:
        return classes.selectionStyle
    }
  }

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
              </Step>
            )
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
  )
}

export default CreatorStepper
