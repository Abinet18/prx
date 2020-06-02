import React from 'react';

import GridContainer from '../Views/GridContainer';
import GridItem from '../Views/GridItem';
import { XS, AlignItems } from '../types/types';
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
}: Props) => {
  const classes = cardStyles();
  return (
    <GridContainer
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      alignItems={alignItems || 'flex-start'}>
      <GridContainer xs className={className}>
        <GridItem xs={12}> {header}</GridItem>
        <GridItem xs={12} className={classes.body}>
          {children}
        </GridItem>
        <GridItem xs={12}>{footer}</GridItem>
      </GridContainer>
    </GridContainer>
  );
};

export default Card;
