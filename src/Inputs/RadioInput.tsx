import React from 'react';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { checkboxStyles } from '../styles/styles';
import { RadioGroup, Radio } from '@material-ui/core';

type Props = {
  options: string[];
  selectedValue: string;
  onChange: (value: string) => void;
  label?: string;
  row?: boolean;
  disabled?: boolean;
};

const RadioInput = ({
  options,
  onChange,
  label,
  selectedValue,
  row,
  disabled,
}: Props) => {
  const classes = checkboxStyles();
  return (
    <FormControl className={classes.root}>
      <FormLabel>{label}</FormLabel>
      <RadioGroup aria-label={label} value={selectedValue} row={row}>
        {options.map((value: string, index: number) => (
          <FormControlLabel
            classes={classes}
            control={
              <Radio
                checked={value === selectedValue}
                onChange={(event) => {
                  onChange(event.target.value);
                }}
                value={value}
              />
            }
            label={value}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioInput;
