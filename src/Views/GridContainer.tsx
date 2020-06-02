import React from 'react';
import Grid from '@material-ui/core/Grid';
import { XS, Spacing, AlignItems, JustifyContent } from '../types/types';

type Props = {
  xs?: XS;
  md?: XS;
  lg?: XS;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  children: any;
  className?: string;
  spacing?: Spacing;
  alignItems?: AlignItems;
  justify?: JustifyContent;
};

const GridContainer = ({
  xs,
  md,
  lg,
  spacing,
  direction,
  children,
  className,
  alignItems,
  justify,
}: Props) => {
  return (
    <Grid
      container
      item
      xs={xs}
      md={md}
      lg={lg}
      direction={direction ?? 'row'}
      justify={justify || 'space-between'}
      alignItems={alignItems || 'center'}
      className={className}
      spacing={spacing}>
      {children}
    </Grid>
  );
};

export default GridContainer;
