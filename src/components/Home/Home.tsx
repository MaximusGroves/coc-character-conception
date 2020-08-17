import React, { FC } from 'react'
import { Paper, Grid, Typography } from '@material-ui/core'
import styles from './Home.style'
import CreatorStepper, { creatorSteps } from '../CreatorStepper/CreatorStepper'
import { useAppContext } from '../../providers/AppContextProvider'
import ArchetypeList from '../ArchetypeList/ArchetypeList'

const Home: FC = () => {
  const classes = styles()
  const { state, api } = useAppContext()
  const { creatorStep } = state

  return (
    <div className={classes.root}>
      <CreatorStepper />
      {creatorStep === creatorSteps.archetype && <ArchetypeList />}
    </div>
  )
}

export default Home
