import React from 'react';

import GridContainer from '../Views/GridContainer';
import { XS, Spacing, AlignItems, JustifyContent } from '../types/types';
import { cardStyles } from '../styles/styles';

type Props = {
  xs?: XS;
  md?: XS;
  lg?: XS;
  children: any;
  alignItems?: AlignItems;
  spacing?: Spacing;
  justify?: JustifyContent;
};

const CardContainer = ({
  xs,
  md,
  lg,
  children,
  alignItems,
  spacing,
  justify,
}: Props) => {
  const classes = cardStyles();
  return (
    <GridContainer
      xs={xs}
      md={md}
      lg={lg}
      className={classes.container}
      spacing={spacing}
      alignItems={alignItems}
      justify={justify}>
      {children}
    </GridContainer>
  );
};

export default CardContainer;
