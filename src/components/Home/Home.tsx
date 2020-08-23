import React, { FC } from 'react'
import styles from './Home.style'
import CreatorStepper from '../CreatorStepper/CreatorStepper'
import { useAppContext } from '../../providers/AppContextProvider'
import ArchetypeList from '../ArchetypeList/ArchetypeList'
import OccupationList from '../OccupationList/OccupationList'
import TalentList from '../TalentList/TalentList'

const Home: FC = () => {
  const classes = styles()
  const { state } = useAppContext()
  const { creatorStep } = state

  return (
    <div className={classes.root}>
      <CreatorStepper />
      {creatorStep === 0 && <ArchetypeList />}
      {creatorStep === 1 && <OccupationList />}
      {creatorStep === 2 && <TalentList /> }
    </div>
  )
}

export default Home
