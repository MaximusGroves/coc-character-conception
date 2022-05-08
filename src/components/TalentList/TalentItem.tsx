import React, { FC } from 'react';
import {
  Typography,
  Divider,
  Button,
  Fade,
  Card,
  CardContent,
} from '@material-ui/core';
import styles from './TalentList.style';
import { Talent } from '../../data/talents';
import { useAppContext } from '../../providers/AppContextProvider';
import { ReactComponent as Sigil } from '../../assets/Sigil_of_the_Gateway.svg';
import clsx from 'clsx';

type Props = {
  talent: Talent;
};

const TalentItem: FC<Props> = (props: Props) => {
  const classes = styles();
  const { talent } = props;
  const { state, api } = useAppContext();
  const { selectTalent } = api;
  const { selectedTalent } = state;

  const selected =
    selectedTalent.filter((val) => val.key === talent.key).length !== 0;

  return (
    <div>
      <Card
        className={clsx(classes.talentCard, selected && classes.talentSelected)}
      >
        <Button
          className={classes.button}
          onClick={() => {
            selectTalent(talent);
          }}
          TouchRippleProps={{
            classes: {
              child: selected ? classes.rippleDeselect : classes.ripple,
            },
          }}
        >
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {talent.name}
            </Typography>
            <Divider className={classes.divider} />
            <Typography variant="body2" className={classes.flavorText}>
              {talent.description}
            </Typography>
          </CardContent>
          <Fade in={selected}>
            <Sigil className={classes.sigil} />
          </Fade>
        </Button>
      </Card>
    </div>
  );
};

export default TalentItem;
