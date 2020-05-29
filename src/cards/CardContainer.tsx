import React from 'react';

import GridContainer from '../Views/GridContainer';
import { XS, Spacing, AlignItems } from '../types/types';
import { cardStyles } from '../styles/styles';

type Props = {
  xs?: XS;
  md?: XS;
  lg?: XS;
  children: any;
  alignItems?: AlignItems;
  spacing?: Spacing;
};

const CardContainer = ({
  xs,
  md,
  lg,
  children,
  alignItems,
  spacing,
}: Props) => {
  const classes = cardStyles();
  return (
    <GridContainer
      xs={xs}
      md={md}
      lg={lg}
      className={classes.container}
      spacing={spacing}
      alignItems={alignItems}>
      {children}
    </GridContainer>
  );
};

export default CardContainer;
