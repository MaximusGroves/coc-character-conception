import React, { FC } from 'react'
import { Grid } from '@material-ui/core'
// import styles from './ArchetypeList.style'
import { archetypes } from '../../data/archetypes'
import CharacteristicRadioGroup from './CharacteristicRadioGroup'
import ArchetypeItem from './ArchetypeItem'

const ArchetypeList: FC = () => {
  const [charFilter, setCharFilter] = React.useState<string>('All')

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCharFilter((event.target as HTMLInputElement).value)
  }

  const filteredArchetypes = archetypes.filter((archetype) => {
    return (
      charFilter === 'All' ||
      archetype.core.find((val) => {
        return val === charFilter
      })
    )
  })

  return (
    <div>
      <CharacteristicRadioGroup
        selection={charFilter}
        onSelection={handleRadioChange}
      />

      <Grid container direction="row" spacing={3}>
        {filteredArchetypes.map((archetype) => (
          <ArchetypeItem archetype={archetype} />
        ))}
      </Grid>
    </div>
  )
}

export default ArchetypeList
