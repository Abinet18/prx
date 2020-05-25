import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { checkboxStyles } from '../styles/styles';

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  disabled?: boolean;
};

const CheckBox = ({ checked, onChange, label, disabled }: Props) => {
  const classes = checkboxStyles();
  return (
    <FormControl className={classes.root}>
      <FormControlLabel
        classes={classes}
        control={
          <Checkbox
            checked={checked}
            onChange={(event) => {
              onChange(event.target.checked);
            }}
          />
        }
        label={label}
      />
    </FormControl>
  );
};

export default CheckBox;
