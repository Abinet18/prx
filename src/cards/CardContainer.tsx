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
  className?: string;
};

const CardContainer = ({
  xs,
  md,
  lg,
  children,
  alignItems,
  spacing,
  justify,
  className,
}: Props) => {
  return (
    <GridContainer
      xs={xs}
      md={md}
      lg={lg}
      className={className}
      spacing={spacing}
      alignItems={alignItems}
      justify={justify}>
      {children}
    </GridContainer>
  );
};

export default CardContainer;
