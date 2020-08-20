import React, { FC } from 'react'
import styles from './Home.style'
import CreatorStepper, { creatorSteps } from '../CreatorStepper/CreatorStepper'
import { useAppContext } from '../../providers/AppContextProvider'
import ArchetypeList from '../ArchetypeList/ArchetypeList'

const Home: FC = () => {
  const classes = styles()
  const { state } = useAppContext()
  const { creatorStep } = state

  return (
    <div className={classes.root}>
      <CreatorStepper />
      {creatorStep === creatorSteps.archetype && <ArchetypeList />}
    </div>
  )
}

export default Home
