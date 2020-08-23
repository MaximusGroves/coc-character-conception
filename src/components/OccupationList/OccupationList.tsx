import React, { FC } from 'react'
import { Grid } from '@material-ui/core'
// import styles from './OccupationList.style'
// import { archetypeList } from '../../data/archetypes'
import { OccupationName } from '../../data/types'
import { occupationList, Occupation } from '../../data/occupations'
// import CharacteristicRadioGroup from './CharacteristicRadioGroup'
import OccupationItem from './OccupationItem'
import IdealOccupationSwitch from './IdealOccupationSwitch'
import { useAppContext } from '../../providers/AppContextProvider'

const OccupationList: FC = () => {
  const { state } = useAppContext()
  const { selectedArchetype } = state

  const [ideal, setIdeal] = React.useState<boolean>(true)

  const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIdeal(event.target.checked)
  }

  const switchDisabled = selectedArchetype === undefined

  let shownOccupations = occupationList

  const archetypeOccs = selectedArchetype?.occupations || []

  //recursive characteristic matching, slow, omits INT, CON
  // const coreOptions = selectedArchetype?.core || []
  // if (ideal && !switchDisabled) {
  //   shownOccupations = occupationList.filter((occ: Occupation) => {
  //     const { idealCharacteristics } = occ
  //     const matchingChar = idealCharacteristics.find(
  //       (idealChar: Characteristic) => {
  //         const matchingCore = coreOptions.find((coreChar) => {
  //           return coreChar === idealChar
  //         })
  //         return matchingCore !== undefined
  //       }
  //     )
  //     return matchingChar !== undefined
  //   })
  // }

  //matching archetype listed occupations
  if (ideal && !switchDisabled) {
    shownOccupations = occupationList.filter((occ: Occupation) => {
      const onList = archetypeOccs.find((archetypeOccName: OccupationName) => {
        return occ.name === archetypeOccName
      })
      return onList !== undefined
    })
  }

  return (
    <div>
      <IdealOccupationSwitch
        checked={ideal}
        onCheck={handleSwitch}
        disabled={switchDisabled}
      />

      <Grid container direction="row" spacing={3}>
        {shownOccupations.map((occupation) => (
          <OccupationItem occupation={occupation} key={occupation.name} />
        ))}
      </Grid>
    </div>
  )
}

export default OccupationList
