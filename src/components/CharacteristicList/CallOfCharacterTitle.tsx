import React, { FC } from 'react';
import { Typography } from '@material-ui/core';
import styles from './CharacteristicList.style';
import clsx from 'clsx';

type TitleProps = {
  style?: any
  className?: string
}

const CallOfCharacterTitle: FC<TitleProps> = (props: TitleProps) => {

  const classes = styles();

  return (

    <div style={props.style} className={clsx(classes.mainTitle, props.className)} >
      <Typography className={classes.titleTop}><span className={classes.titleEvenC}>C</span>ALL <span className={classes.titleEvenC}>OF</span></Typography>
      <Typography className={classes.titleBottom}><span className={classes.titleBigC}>C</span>HA<span className={classes.title1}>R</span>A<span className={classes.title1}>C</span>TE<span className={classes.titleBigR}>R</span></Typography>
    </div >
  );
};

export default CallOfCharacterTitle;
