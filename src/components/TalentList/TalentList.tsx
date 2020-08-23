import React, { FC } from 'react'
import { Grid } from '@material-ui/core'
import { } from '@material-ui/core'

import TalentListSection from './TalentListSection'
import { talentListSections } from '../../data/talents'

const TalentList: FC = () => {

  //const [charFilter, setCharFilter] = React.useState<string>('All')

  return (
    <div>
        {talentListSections.map((section) => (
          <Grid container direction="row" spacing={3}>
            <TalentListSection section={section} key={section.name}/>
          </Grid>
       ))}
    </div>
  )
}

export default TalentList
 