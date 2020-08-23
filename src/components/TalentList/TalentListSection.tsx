import React, { FC } from 'react'
import { Grid, Paper, Typography, Divider } from '@material-ui/core'
import { TalentList } from '../../data/talents'
import TalentItem from './TalentItem'
import styles from './TalentList.style'
import clsx from 'clsx'


type sectionProps = {
  section: TalentList
}

const TalentListSection: FC<sectionProps> = (props) => {
  const classes = styles()

  const { section } = props
  console.log(section)
  /*
  const [charFilter, setCharFilter] = React.useState<string>('All')

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCharFilter((event.target as HTMLInputElement).value)
  }
  */

  return (
    <div>
      <Paper className={clsx(
        classes.talentSection
      )}
      >
        <div className={classes.itemContainer}>
          <Typography variant="h2" className={classes.title}>
            {props.section.name}
          </Typography>
          <Divider className={classes.divider} />
              <Grid container direction="row" spacing={3}>
            {props.section.talents.map((talent) => (
                  <TalentItem talent={talent} key={talent.name} />
                ))
              }
            </Grid>
        </div>
      </Paper>
    </div>
  )
}

export default TalentListSection
