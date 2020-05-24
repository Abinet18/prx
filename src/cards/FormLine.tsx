import React from 'react';
import GridItem from '../Views/GridItem';
import Label from '../Inputs/Label';
import GridContainer from '../Views/GridContainer';
import { formStyles } from '../styles/styles';

type Props = {
  label: string;
  children: any;
};

const FormLine = ({ label, children }: Props) => {
  const classes = formStyles();
  return (
    <GridContainer xs className={classes.formLine}>
      <GridItem xs={2}>
        <Label label={label} />
      </GridItem>
      <GridItem xs>{children}</GridItem>
    </GridContainer>
  );
};

export default FormLine;
