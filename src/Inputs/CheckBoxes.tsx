import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { checkboxStyles } from '../styles/styles';
import { CheckboxValue } from '../types/types';

type Props = {
  values: CheckboxValue[];
  onChange: (index: number, checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  row?: boolean;
};

const CheckBoxes = ({ values, onChange, label, row, disabled }: Props) => {
  const classes = checkboxStyles();
  return (
    <FormControl className={classes.root}>
      <FormLabel component='legend'>{label}</FormLabel>
      <FormGroup row={row}>
        {values.map((value: CheckboxValue, index: number) => (
          <FormControlLabel
            classes={classes}
            control={
              <Checkbox
                checked={value.checked}
                onChange={(event) => {
                  onChange(index, event.target.checked);
                }}
              />
            }
            label={value.value}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

export default CheckBoxes;
