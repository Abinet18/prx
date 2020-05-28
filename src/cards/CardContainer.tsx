import React from 'react';

import GridContainer from '../Views/GridContainer';
import { XS } from '../types/types';
import { cardStyles } from '../styles/styles';

type Props = {
  xs?: XS;
  children: any;
};

const CardContainer = ({ xs, children }: Props) => {
  const classes = cardStyles();
  return (
    <GridContainer xs={xs} className={classes.container} spacing={1}>
      {children}
    </GridContainer>
  );
};

export default CardContainer;
