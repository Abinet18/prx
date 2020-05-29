import React from 'react';

import GridContainer from '../Views/GridContainer';
import GridItem from '../Views/GridItem';
import { XS, AlignItems } from '../types/types';
import { cardStyles } from '../styles/styles';
import cx from 'classnames';

type Props = {
  xs?: XS;
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
      md={md}
      lg={lg}
      className={className}
      alignItems={alignItems || 'flex-start'}>
      <GridItem xs={12}> {header}</GridItem>
      <GridItem xs={12} className={classes.body}>
        {children}
      </GridItem>
      <GridItem xs={12}>{footer}</GridItem>
    </GridContainer>
  );
};

export default Card;
