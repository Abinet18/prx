import React from 'react';

import GridContainer from '../Views/GridContainer';
import GridItem from '../Views/GridItem';
import { XS, AlignItems, JustifyContent } from '../types/types';
import { cardStyles } from '../styles/styles';

type Props = {
  xs?: XS;
  sm?: XS;
  md?: XS;
  lg?: XS;
  alignItems?: AlignItems;
  children: any;
  header?: any;
  footer?: any;
  className?: string;
  justify?: JustifyContent;
};

const Card = ({
  xs,
  sm,
  md,
  lg,
  children,
  header,
  footer,
  className,
  alignItems,
  justify,
}: Props) => {
  return (
    <GridContainer
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      alignItems={alignItems || 'flex-start'}
      justify={justify || 'flex-start'}>
      <GridContainer xs className={className}>
        <GridItem xs={12}> {header}</GridItem>
        <GridItem xs={12}>{children}</GridItem>
        <GridItem xs={12}>{footer}</GridItem>
      </GridContainer>
    </GridContainer>
  );
};

export default Card;
