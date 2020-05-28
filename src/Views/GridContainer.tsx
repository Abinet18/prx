import React from 'react';
import Grid from '@material-ui/core/Grid';
import { XS, Spacing } from '../types/types';

type Props = {
  xs?: XS;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  children: any;
  className?: string;
  spacing?: Spacing;
};

const GridContainer = ({
  xs,
  spacing,
  direction,
  children,
  className,
}: Props) => {
  return (
    <Grid
      container
      item
      xs={xs}
      direction={direction ?? 'row'}
      justify='center'
      alignItems='center'
      className={className}
      spacing={spacing}>
      {children}
    </Grid>
  );
};

export default GridContainer;
