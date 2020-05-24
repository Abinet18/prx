import React from 'react';

import GridContainer from '../Views/GridContainer';
import GridItem from '../Views/GridItem';
import { XS } from '../types/types';
import { cardStyles } from '../styles/styles';

type Props = {
  xs?: XS;
  title?: string;
  children: any;
  footer: any;
};

const Card = ({ xs, title, children, footer }: Props) => {
  const classes = cardStyles();
  return (
    <GridContainer xs={xs} className={classes.root}>
      <GridItem xs={12} className={classes.header}>
        {title}
      </GridItem>
      <GridItem xs={12} className={classes.body}>
        {children}
      </GridItem>
      <GridItem xs={12} className={classes.footer}>
        {footer}
      </GridItem>
    </GridContainer>
  );
};

export default Card;
