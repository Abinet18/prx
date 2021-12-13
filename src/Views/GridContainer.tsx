import React from 'react';
import Grid from '@material-ui/core/Grid';
import { XS, Spacing, AlignItems, JustifyContent } from '../types/types';

type Props = {
  xs?: XS;
  md?: XS;
  lg?: XS;
  sm?: XS;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  children: any;
  className?: string;
  spacing?: Spacing;
  alignItems?: AlignItems;
  justify?: JustifyContent;
  onClick?: () => void;
};

const GridContainer = ({
  xs,
  sm,
  md,
  lg,
  spacing,
  direction,
  children,
  className,
  alignItems,
  justify,
  onClick,
}: Props) => {
  return (
    <Grid
      container
      item
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      direction={direction ?? 'row'}
      alignItems={alignItems || 'flex-start'}
      className={className}
      spacing={spacing}
      onClick={onClick}>
      {children}
    </Grid>
  );
};

export default GridContainer;
