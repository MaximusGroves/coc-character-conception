import React, { FC } from 'react'
import { Grid } from '@material-ui/core'
// import styles from './OccupationList.style'
import { archetypeList } from '../../data/archetypes'
import { occupations } from '../../data/occupations'
import CharacteristicRadioGroup from './CharacteristicRadioGroup'
import OccupationItem from './OccupationItem'

const OccupationList: FC = () => {
  // const [charFilter, setCharFilter] = React.useState<string>('All')

  // const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setCharFilter((event.target as HTMLInputElement).value)
  // }

  // const filteredArchetypes = archetypeList.filter((archetype) => {
  //   return (
  //     charFilter === 'All' ||
  //     archetype.core.find((val) => {
  //       return val === charFilter
  //     })
  //   )
  // })

  return (
    <div>
      <Grid container direction="row" spacing={3}>
        {occupations.map((occupation) => (
          <OccupationItem occupation={occupation} key={occupation.name} />
        ))}
      </Grid>
    </div>
  )
}

export default OccupationList
