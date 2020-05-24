import React from 'react';
import Grid from '@material-ui/core/Grid';
import { XS } from '../types/types';

type Props = {
  xs?: XS;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  children: any;
  className?: string;
};

const GridContainer = ({ xs, direction, children, className }: Props) => {
  return (
    <Grid
      container
      xs={xs}
      direction={direction ?? 'row'}
      justify='center'
      alignItems='center'
      className={className}>
      {children}
    </Grid>
  );
};

export default GridContainer;
