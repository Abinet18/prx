import React from 'react';
import Grid from '@material-ui/core/Grid';
import { XS } from '../types/types';

type Props = {
  xs?: XS;
  children: any;
  className?: string;
};
const GridItem = ({ xs, children, className }: Props) => {
  return (
    <Grid item xs={xs} className={className}>
      {children}
    </Grid>
  );
};

export default GridItem;
