import React, { FC } from 'react';
import { Grid, IconButton, Typography } from '@material-ui/core';

import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';
import styles from './SkillList.style';
import clsx from 'clsx';

type TitleLinkedProps = {
    title?: string,
    titleClass?: string,
    prevRef?: React.RefObject<HTMLDivElement>,
    thisRef: React.RefObject<HTMLDivElement>,
    nextRef?: React.RefObject<HTMLDivElement>
}

const TitleLinked: FC<TitleLinkedProps> = (props: TitleLinkedProps) => {

    const { title, titleClass, prevRef, thisRef, nextRef } = props;
    const classes = styles();

    return (
        <Grid container direction="row" ref={thisRef} justifyContent="center" alignItems="center" style={{ marginTop: 20 }}>

            <IconButton
                disabled={prevRef === undefined}
                onClick={() => {
                    prevRef?.current?.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                <ArrowDropUp />
            </IconButton >
            <Typography
                className={clsx(classes.titleLinked, titleClass)}
            >
                {title}
            </Typography>
            < IconButton
                disabled={nextRef === undefined}
                onClick={() => {
                    nextRef?.current?.scrollIntoView({ behavior: 'smooth' });
                }}
            > <ArrowDropDown />
            </IconButton >

        </Grid >
    )
};

export default TitleLinked;
